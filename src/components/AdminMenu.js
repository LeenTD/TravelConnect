import React, { useEffect } from 'react';
import '../css/AdminListUser.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminMenu() {

    // Retrieve user data from localStorage when the component mounts
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

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
