import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const initialUsers = [
        {
            id: 1,
            username: 'Admin',
            password: 'admin',
            fullname: 'Admin',
            dateofbirth: '1990-01-01',
            city: 'Đà Nẵng',
            age: 34,
            gender: 'Nam',
            hobby: 'Du lịch',
            description: 'Thích rong chơi khắp nơi',
            image: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
            role: 'Admin'
        },
        {
            id: 2,
            username: 'User1',
            password: 'pass1',
            fullname: 'Nguyen Minh Anh',
            dateofbirth: '1992-05-12',
            city: 'Quảng Nam',
            age: 32,
            gender: 'Nữ',
            hobby: 'Chụp ảnh',
            description: 'Du lịch và lưu lại những khoảnh khắc đáng nhớ',
            image: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727913600&semt=ais_hybrid',
            role: 'User'
        },
        {
            id: 3,
            username: 'User2',
            password: 'pass2',
            fullname: 'Tran Khoa',
            dateofbirth: '1985-08-15',
            city: 'Dak lak',
            age: 39,
            gender: 'Nam',
            hobby: 'Đi phượt',
            description: 'Sống cho hết đời thanh xuân',
            image: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
            role: 'User'
        },
        {
            id: 4,
            username: 'User3',
            password: 'pass3',
            fullname: 'Pham Gia Long',
            dateofbirth: '1995-03-10',
            city: 'Đà Nẵng',
            age: 29,
            gender: 'Nam',
            hobby: 'Bơi lội',
            description: 'Đẹp trai nhà giàu, Ế',
            image: 'https://thanhtra.com.vn/data/images/0/2022/07/13/congdinh/img64.jpg?dpi=150&quality=100&w=630&mode=crop&anchor=topcenter&scale=both',
            role: 'User'
        },
        {
            id: 5,
            username: 'User4',
            password: 'pass4',
            fullname: 'John Sue',
            dateofbirth: '1988-11-22',
            city: 'Đà Nẵng',
            age: 35,
            gender: 'Nam',
            hobby: 'Sing',
            description: 'Trải nghiệm tất cả',
            image: 'https://danviet.mediacdn.vn/296231569849192448/2022/7/18/z3575814842290f4a344b1db566b37fa96b7a2550a9801-1658133352416631936514.jpg',
            role: 'User'
        },
        {
            id: 6,
            username: 'User5',
            password: 'pass5',
            fullname: 'Tran Dung',
            dateofbirth: '1993-07-15',
            city: 'Quảng Trị',
            age: 31,
            gender: 'Nữ',
            hobby: 'Nấu ăn',
            description: 'Kết bạn bốn phương',
            image: 'https://danviet.mediacdn.vn/296231569849192448/2022/7/18/a33b29c7c6b604e85da7-1658133524535230644268.jpg',
            role: 'User'
        },
        {
            id: 7,
            username: 'User6',
            password: 'pass6',
            fullname: 'Kim Tien',
            dateofbirth: '1994-02-28',
            city: 'Ha Noi',
            age: 30,
            gender: 'Nữ',
            hobby: 'Đọc sách',
            description: 'Tri thức muôn năm',
            image: 'https://vnn-imgs-f.vgcloud.vn/2019/05/23/09/4-nguoi-dep-lay-danh-hai-noi-tieng-viet-nam-nhung-lai-song-khac-nhau-the-nay-20.jpg',
            role: 'User'
        },
        {
            id: 8,
            username: 'User7',
            password: 'pass7',
            fullname: 'Eva Black',
            dateofbirth: '1986-09-12',
            city: 'Boston',
            age: 38,
            gender: 'Female',
            hobby: 'Dancing',
            description: 'Dance lover and performer.',
            image: 'https://danviet.mediacdn.vn/296231569849192448/2022/7/18/8718f1b81dc9df9786d8-16581334259081695393119.jpg',
            role: 'User'
        },
        {
            id: 9,
            username: 'User8',
            password: 'pass8',
            fullname: 'Frank Blue',
            dateofbirth: '1990-12-03',
            city: 'Houston',
            age: 33,
            gender: 'Male',
            hobby: 'Gaming',
            description: 'Gamer and tech enthusiast.',
            image: 'https://example.com/image9.jpg',
            role: 'User'
        }
    ];

    // Only set the user list once
    if (!localStorage.getItem('userList')) {
        localStorage.setItem('userList', JSON.stringify(initialUsers));
    }

    // Load the user list from localStorage when the component mounts
    useEffect(() => {
        const userList = JSON.parse(localStorage.getItem('userList')) || [];
        setUsers(userList);
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();

        // Check if user exists in the userList
        const userData = users.find(
            (user) => user.username === email && user.password === password
        );
        if (userData) {
            // Save the logged-in user data to localStorage
            localStorage.setItem('user', JSON.stringify(userData));
            console.log('Logged in user:', userData); // Debugging line
            // Navigate based on the user's role
            if (userData.role === 'Admin') {
                console.log('Redirecting to /search'); // Debugging line
                navigate('/admin');
            } else {
                console.log('Redirecting to home'); // Debugging line
                navigate('/');
            }
        } else {
            alert('Invalid credentials');
        }
    };


    return (
        <div id="main-wrapper" className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10">
                    <div className="card border-0">
                        <div className="card-body p-0">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="mb-5">
                                            <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                        </div>
                                        <h6 className="h5 mb-0">Welcome back!</h6>
                                        <p className="text-muted mt-2 mb-5">
                                            Enter your username and password to access the platform.
                                        </p>
                                        <form onSubmit={handleLogin}>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-5">
                                                <label htmlFor="exampleInputPassword1">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-theme">Login</button>
                                            <a href="#forgot" className="forgot-link float-right text-primary">Forgot password?</a>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-none d-lg-inline-block">
                                    <div className="account-block rounded-right">
                                        <div className="overlay rounded-right"></div>
                                        <div className="account-testimonial">
                                            <h4 className="text-white mb-4">This beautiful theme is yours!</h4>
                                            <p className="lead text-white">
                                                "Best investment I made for a long time. Can only recommend it for other users."
                                            </p>
                                            <p>- Admin User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-muted text-center mt-3 mb-0">
                        Don't have an account? <a href="#register" className="text-primary ml-1">Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
