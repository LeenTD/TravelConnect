import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Profile.css';

function Profile() {
    const { userId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [tripPlans, setTripPlans] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    useEffect(() => {
        const savedTripPlans = localStorage.getItem('tripPlans');

        if (!savedTripPlans) {
            const tripPlans = [
                { id: 1, idUser: 1, Host: 'Admin', Destination: 'Paris', Time: '2024-12-01', MaxPerson: 4, TripDetails: 'A trip to explore the Eiffel Tower.', Participants: [] },
                { id: 2, idUser: 2, Host: 'Nguyen Minh Anh', Destination: 'Tokyo', Time: '2024-11-15', MaxPerson: 3, TripDetails: 'Enjoy the cherry blossoms and culture.', Participants: [] },
                { id: 3, idUser: 3, Host: 'Tran Khoa', Destination: 'New York', Time: '2024-10-25', MaxPerson: 5, TripDetails: 'Visit iconic landmarks like the Statue of Liberty.', Participants: [] },
                { id: 4, idUser: 1, Host: 'Admin', Destination: 'Berlin', Time: '2024-09-30', MaxPerson: 2, TripDetails: 'Explore the rich history of Berlin.', Participants: [] },
                { id: 5, idUser: 2, Host: 'Nguyen Minh Anh', Destination: 'Sydney', Time: '2024-08-20', MaxPerson: 6, TripDetails: 'Enjoy the beautiful beaches and opera house.', Participants: [] },
                { id: 6, idUser: 3, Host: 'Tran Khoa', Destination: 'Rome', Time: '2024-07-15', MaxPerson: 4, TripDetails: 'Explore ancient ruins and museums.', Participants: [] },
                { id: 7, idUser: 1, Host: 'Admin', Destination: 'London', Time: '2024-06-05', MaxPerson: 4, TripDetails: 'Visit Buckingham Palace and more.', Participants: [] },
                { id: 8, idUser: 2, Host: 'Nguyen Minh Anh', Destination: 'Los Angeles', Time: '2024-05-10', MaxPerson: 5, TripDetails: 'Explore Hollywood and the city.', Participants: [] },
                { id: 9, idUser: 3, Host: 'Tran Khoa', Destination: 'Dubai', Time: '2024-04-22', MaxPerson: 3, TripDetails: 'Experience luxury and desert tours.', Participants: [] },
                { id: 10, idUser: 1, Host: 'Admin', Destination: 'Bangkok', Time: '2024-03-12', MaxPerson: 6, TripDetails: 'Explore the vibrant city and temples.', Participants: [] },
            ];

            localStorage.setItem('tripPlans', JSON.stringify(tripPlans));
        }
    }, []);

    useEffect(() => {
        const savedUsers = localStorage.getItem('userList');
        const savedTripPlans = localStorage.getItem('tripPlans');

        if (savedUsers) {
            const users = JSON.parse(savedUsers);
            const foundUser = users.find((u) => u.id.toString() === userId);

            if (foundUser) {
                setUserData(foundUser);
            } else {
                console.error('User not found for ID:', userId);
            }
        }

        if (savedTripPlans) {
            const plans = JSON.parse(savedTripPlans);
            const userTripPlans = plans.filter((plan) => plan.idUser.toString() === userId);
            setTripPlans(userTripPlans);
        }

        setIsLoading(false);
    }, [userId]);

    const handleInterest = (planId) => {
        const selectedPlan = tripPlans.find(plan => plan.id === planId);

        if (selectedPlan) {
            if (!selectedPlan.Participants) {
                selectedPlan.Participants = [];
            }

            const isParticipant = selectedPlan.Participants.some(participant => participant.idUser === user.id);

            if (!isParticipant) {
                selectedPlan.Participants.push({ idUser: user.id, status: 'wait' });
                toast.success('Yêu cầu đã được gửi thành công!');

                const updatedTripPlans = tripPlans.map(plan =>
                    plan.id === planId ? selectedPlan : plan
                );

                setTripPlans(updatedTripPlans);
                localStorage.setItem('tripPlans', JSON.stringify(updatedTripPlans));
            } else {
                toast.info('Bạn đã quan tâm đến kế hoạch này!');
            }
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>User not found.</div>;
    }

    return (
        <div>
            <Menu />
            <ToastContainer />
            <section className="section profile-section gray-bg" id="profile">
                <div className="container">
                    <div className="row">
                        {/* Cột bên trái: Thông tin người dùng */}
                        <div className="col-md-6">
                            <div className="about-text go-to d-flex">
                                <div>
                                    {/* Thêm phần hiển thị ảnh người dùng */}
                                    <div className="user-avatar mb-3">
                                        <img
                                            src={userData.image}
                                            alt={userData.fullname}
                                            className="img-fluid rounded"
                                            style={{ maxWidth: '200px', height: 'auto' }}
                                        />
                                    </div>

                                    <h3 className="dark-color">Giới thiệu</h3>
                                    <h6 className="theme-color lead">{userData.fullname} - {userData.gender}</h6>
                                    <p>{userData.description}</p>
                                </div>
                                <div className="row m-5">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <h5>Birthday</h5>
                                            <p>{userData.dateofbirth}</p>
                                        </div>
                                        <div className="media">
                                            <h5>Age</h5>
                                            <p>{userData.age} Yr</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <h5>City</h5>
                                            <p>{userData.city}</p>
                                        </div>
                                        <div className="media">
                                            <h5>Hobby</h5>
                                            <p>{userData.hobby}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cột bên phải: Danh sách kế hoạch du lịch */}
                        <div className="col-md-6">
                            <h3 className="dark-color">Kế hoạch du lịch sắp tới</h3>
                            {tripPlans.length > 0 ? (
                                <div className="row">
                                    {tripPlans.map((plan, index) => (
                                        <div className="col-md-12 mb-3" key={index}>
                                            <div className="card shadow-sm">
                                                <div className="card-body">
                                                    <h5 className="card-title">Điểm đến: {plan.Destination}</h5>
                                                    <p className="card-text"><strong>Host:</strong> {plan.Host}</p>
                                                    <p className="card-text"><strong>Thời gian:</strong> {plan.Time}</p>
                                                    <p className="card-text"><strong>Số người tối đa:</strong> {plan.MaxPerson}</p>
                                                    <p className="card-text"><strong>Chi tiết:</strong> {plan.TripDetails}</p>
                                                    <button className="btn btn-primary" onClick={() => handleInterest(plan.id)}>
                                                        Quan tâm
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>Không có kế hoạch du lịch nào sắp tới.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
