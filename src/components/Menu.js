import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu({ isLoggedIn }) {
    return (
        <div>
            {/* Navbar */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">TravelConnect</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Trang Chủ</Nav.Link>
                            <Nav.Link href="/posts">Bài Viết</Nav.Link>
                            <Nav.Link href="/search">Bạn Đồng Hành</Nav.Link>
                            <Nav.Link href="/support">Hỗ Trợ</Nav.Link>
                        </Nav>
                        <Nav>
                            {isLoggedIn ? (
                                <Nav.Link href="/profile">
                                    <img src="/path-to-avatar.jpg" alt="Avatar" className="avatar" />
                                </Nav.Link>
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
