import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate để điều hướng
import '../css/AdminListUser.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminMenu() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Hook để điều hướng

    // Retrieve user data from localStorage when the component mounts
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user data from localStorage
        setUser(null); // Reset user state
        window.location.href = '/login'; // Redirect to login page
    };

    const handleReset = () => {
        localStorage.clear(); // Clear all local storage data
    };

    const goToProfile = () => {
        // Điều hướng tới trang Profile và truyền ID hoặc thông tin user
        navigate(`/profile/${user.id}`);
    };

    return (
        <div className="col-lg-3">
            <div className="menu">
                <ul className="list-group">
                    <li className="list-group-item ">Thống kê</li>
                    <li className="list-group-item active">Danh sách người dùng</li>
                    <li className="list-group-item">Báo cáo</li>
                    <li className="list-group-item">Đăng xuất</li>
                </ul>
            </div>
        </div>
    );
}

export default AdminMenu;
