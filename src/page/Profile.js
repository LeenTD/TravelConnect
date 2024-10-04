import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Profile.css';

function Profile() {
    const { userId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [tripPlans, setTripPlans] = useState([]);

    useEffect(() => {
        const savedTripPlans = localStorage.getItem('tripPlans');

        if (!savedTripPlans) {
            const tripPlans = [
                { idUser: 1, Host: 'John Doe', Destination: 'Paris', Time: '2024-12-01', MaxPerson: 4, TripDetails: 'A trip to explore the Eiffel Tower.' },
                { idUser: 2, Host: 'Jane Smith', Destination: 'Tokyo', Time: '2024-11-15', MaxPerson: 3, TripDetails: 'Enjoy the cherry blossoms and culture.' },
                { idUser: 3, Host: 'Alice Johnson', Destination: 'New York', Time: '2024-10-25', MaxPerson: 5, TripDetails: 'Visit iconic landmarks like the Statue of Liberty.' },
                { idUser: 1, Host: 'John Doe', Destination: 'Berlin', Time: '2024-09-30', MaxPerson: 2, TripDetails: 'Explore the rich history of Berlin.' },
                { idUser: 2, Host: 'Jane Smith', Destination: 'Sydney', Time: '2024-08-20', MaxPerson: 6, TripDetails: 'Enjoy the beautiful beaches and opera house.' },
                { idUser: 3, Host: 'Alice Johnson', Destination: 'Rome', Time: '2024-07-15', MaxPerson: 4, TripDetails: 'Explore ancient ruins and museums.' },
                { idUser: 1, Host: 'John Doe', Destination: 'London', Time: '2024-06-05', MaxPerson: 4, TripDetails: 'Visit Buckingham Palace and more.' },
                { idUser: 2, Host: 'Jane Smith', Destination: 'Los Angeles', Time: '2024-05-10', MaxPerson: 5, TripDetails: 'Explore Hollywood and the city.' },
                { idUser: 3, Host: 'Alice Johnson', Destination: 'Dubai', Time: '2024-04-22', MaxPerson: 3, TripDetails: 'Experience luxury and desert tours.' },
                { idUser: 1, Host: 'John Doe', Destination: 'Bangkok', Time: '2024-03-12', MaxPerson: 6, TripDetails: 'Explore the vibrant city and temples.' },
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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!userData) {
        return <div>User not found.</div>;
    }

    return (
        <div>
            <Menu />
            <section className="section about-section gray-bg" id="about">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color">Giới thiệu</h3>
                                <h6 className="theme-color lead">{userData.fullname} - {userData.gender}</h6>
                                <p>{userData.description}</p>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Birthday</label>
                                            <p>{userData.dateofbirth}</p>
                                        </div>
                                        <div className="media">
                                            <label>Age</label>
                                            <p>{userData.age} Yr</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>City</label>
                                            <p>{userData.city}</p>
                                        </div>
                                        <div className="media">
                                            <label>Hobby</label>
                                            <p>{userData.hobby}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-avatar">
                                <img src={userData.image} title={userData.fullname} alt={userData.fullname} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Danh sách kế hoạch du lịch */}
            <section className="section trip-plans-section gray-bg">
                <div className="container">
                    <h3 className="dark-color">Kế hoạch du lịch sắp tới</h3>
                    {tripPlans.length > 0 ? (
                        <div className="row">
                            {tripPlans.map((plan, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="card mb-4 shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title">Điểm đến: {plan.Destination}</h5>
                                            <p className="card-text"><strong>Host:</strong> {plan.Host}</p>
                                            <p className="card-text"><strong>Thời gian:</strong> {plan.Time}</p>
                                            <p className="card-text"><strong>Số người tối đa:</strong> {plan.MaxPerson}</p>
                                            <p className="card-text"><strong>Chi tiết:</strong> {plan.TripDetails}</p>
                                            <button className="btn btn-primary">Quan tâm</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Không có kế hoạch du lịch nào sắp tới.</p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Profile;
