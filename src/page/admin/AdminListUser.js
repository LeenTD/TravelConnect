import React, { useState, useEffect } from 'react';
import '../../css/AdminListUser.css'; // Import CSS styles
import AdminMenu from '../../components/AdminMenu';

function AdminListUser() {
    const [users, setUsers] = useState([]);

    // Lấy dữ liệu User từ localStorage
    useEffect(() => {
        const fetchUsersFromLocalStorage = () => {
            const storedUsers = JSON.parse(localStorage.getItem('userList')) || [];
            setUsers(storedUsers);
        };

        fetchUsersFromLocalStorage();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <AdminMenu />

                {/* Phần danh sách user */}
                <div className="col-lg-9">
                    <div className="main-box clearfix">
                        <div className="table-responsive">
                            <table className="table user-list">
                                <thead>
                                    <tr>
                                        <th><span>ID</span></th>
                                        <th><span>Full Name</span></th>
                                        <th><span>Username</span></th>
                                        <th><span>City</span></th>
                                        <th><span>Date of Birth</span></th>
                                        <th><span>Gender</span></th>
                                        <th><span>Role</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.fullname}</td>
                                            <td>{user.username}</td>
                                            <td>{user.city}</td>
                                            <td>{user.dateofbirth}</td>
                                            <td>{user.gender}</td>
                                            <td>{user.role}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminListUser;
