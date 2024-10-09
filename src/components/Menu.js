import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Sử dụng useNavigate để điều hướng
import '../css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
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
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">TravelConnect</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Trang Chủ</Nav.Link>
                            <Nav.Link href="/posts">Bài Viết</Nav.Link>
                            <Nav.Link href="/search">Bạn Đồng Hành</Nav.Link>
                            <Nav.Link href="/tripmanagement">Chuyến đi</Nav.Link>
                            <Nav.Link href="/support">Hỗ Trợ</Nav.Link>
                        </Nav>
                        <Nav>
                            {user ? (
                                <>
                                    <Dropdown align="end">
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            <img src={user.image} alt="Avatar" className="avatar" />
                                            <span className="ms-2">{user.fullname}</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={goToProfile}>Hồ sơ</Dropdown.Item> {/* Điều hướng */}
                                            <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                            <Dropdown.Item onClick={handleReset}>RESET</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </>
                            ) : (
                                <>
                                    <Button variant="outline-primary" href="/register" className="me-2">Đăng Kí</Button>
                                    <Button variant="primary" href="/login">Đăng Nhập</Button>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu;
