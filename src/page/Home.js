import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';


function Home({ isLoggedIn }) {
    return (
        <div>
            {/* Navbar */}
            <div><Menu /></div>

            {/* Banner */}
            <div className="banner">
                <img src="https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2017/10/26015647/dich-vu-thiet-ke-banner-du-lich-chuyen-nghiep-tai-ha-noi4.jpg" alt="Banner" className="banner-img" />
                <div className="banner-text">
                    <h1>Khám Phá Thế Giới Cùng TravelConnect</h1>
                    <p>Kết nối với những người bạn đồng hành và tận hưởng chuyến đi của bạn.</p>
                </div>
            </div>

            {/* Giới thiệu */}
            <section className="introduction">
                <Container>
                    <h2>Về TravelConnect</h2>
                    <p>TravelConnect là nền tảng giúp bạn kết nối với những người bản địa và các bạn đồng hành trong chuyến đi của bạn. Với nhiều công cụ hữu ích và thông tin chi tiết, chúng tôi giúp bạn tận hưởng những chuyến đi đáng nhớ nhất.</p>
                </Container>
            </section>

            {/* Footer */}
            <footer className="footer">
                <Container>
                    <p>&copy; 2024 TravelConnect. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    );
}

export default Home;
