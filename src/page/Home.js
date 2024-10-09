import React, { useState } from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import '../css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu';

function Home({ isLoggedIn }) {
    const [activeEvent, setActiveEvent] = useState(2); // Bắt đầu với sự kiện thứ 2 là ở giữa

    const events = [
        { id: 1, img: "https://nhuminhplazahotel.com/wp-content/uploads/2023/10/le-hoi-am-nhac-da-nang-3.jpg", alt: "Event 1" },
        { id: 2, img: "https://nhuminhplazahotel.com/wp-content/uploads/2023/10/le-hoi-am-nhac-da-nang-5.jpg", alt: "Event 2" },
        { id: 3, img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/7/8/1065693/Take-Me-To-The-Sun.jpg", alt: "Event 3" },
        { id: 4, img: "https://file.qdnd.vn/data/images/0/2020/12/30/vuhuyen/25122020huyen47pg.jpg?dpi=150&quality=100&w=575", alt: "Event 4" },
        { id: 5, img: "https://helio.vn/media/uploads/2023/07/20/le-hoi-tan-huong-mua-he-enjoy-da-nang-20231_HFV7hlg.jpg", alt: "Event 5" }
    ];

    const handleEventClick = (index) => {
        setActiveEvent(index);
    };
    return (
        <div>
            {/* Navbar */}
            <div><Menu /></div>

            {/* Banner - Carousel */}
            <Carousel className="banner-carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://tangthienlac.vn/uploads/shops/2020_11/hinh-anh-canh-dep-ra-bien.jpg"
                        alt="Banner 1"
                    />
                    <Carousel.Caption>
                        <h1>Khám Phá Thế Giới Cùng TravelConnect</h1>
                        <p>Kết nối với những người bạn đồng hành và tận hưởng chuyến đi của bạn.</p>
                        <Button variant="primary" size="lg">Bắt Đầu Chuyến Đi</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-5.jpg.webp"
                        alt="Banner 2"
                    />
                    <Carousel.Caption>
                        <h1>Trải Nghiệm Những Vùng Đất Tuyệt Đẹp</h1>
                        <p>Khám phá những khung cảnh ngoạn mục từ khắp nơi trên thế giới.</p>
                        <Button variant="primary" size="lg">Tìm Hiểu Ngay</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/anh-phong-canh-dep-7.jpg.webp"
                        alt="Banner 3"
                    />
                    <Carousel.Caption>
                        <h1>Khám Phá Thiên Nhiên Hoang Dã</h1>
                        <p>Tận hưởng vẻ đẹp thiên nhiên và những trải nghiệm tuyệt vời.</p>
                        <Button variant="primary" size="lg">Khám Phá Ngay</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Giới thiệu */}
            <section className="introduction">
                <Container>
                    <h2>Về TravelConnect</h2>
                    <p>TravelConnect là nền tảng giúp bạn kết nối với những người bản địa và các bạn đồng hành trong chuyến đi của bạn. Với nhiều công cụ hữu ích và thông tin chi tiết, chúng tôi giúp bạn tận hưởng những chuyến đi đáng nhớ nhất.</p>
                </Container>
            </section>

            {/* Events */}
            <section className="events-section">
                <Container>
                    <h2 className="text-center mb-4">Sự Kiện Nổi Bật</h2>
                    <div className="events-container">
                        {events.map((event, index) => (
                            <div
                                key={event.id}
                                className={`event-image ${index === activeEvent ? 'active' : ''}`}
                                onClick={() => handleEventClick(index)}
                                style={{ zIndex: index === activeEvent ? 10 : 1 }}
                            >
                                <img src={event.img} alt={event.alt} />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Featured Destinations */}
            <section className="destinations">
                <Container>
                    <h2 className="text-center mb-4">Điểm Đến Nổi Bật</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://btnmt.1cdn.vn/2023/06/15/1.jpg" className="card-img-top" alt="Paris" />
                                <div className="card-body">
                                    <h5 className="card-title">Quảng Bình</h5>
                                    <p className="card-text">Trải nghiệm không gian thiên nhiên với loạt hang động tự nhiên.</p>
                                    <Button variant="primary">Tìm Hiểu Thêm</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://duonggiahotel.vn/wp-content/uploads/2023/11/dia-diem-du-lich-da-nang-avt.jpg" className="card-img-top" alt="Tokyo" />
                                <div className="card-body">
                                    <h5 className="card-title">Đà Nẵng</h5>
                                    <p className="card-text">Khám phá thủ đô hiện đại, nhộn nhíp và sôi động của Đà Nẵng.</p>
                                    <Button variant="primary">Tìm Hiểu Thêm</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://lycafetourist.vn/wp-content/uploads/2022/11/vietpromotion.vn-bo-tui-bi-kip-cam-nang-du-lich-da-lat.jpg" className="card-img-top" alt="Bali" />
                                <div className="card-body">
                                    <h5 className="card-title">Đà Lạt</h5>
                                    <p className="card-text">Thư giãn trên những ngọn đồi yên bình của thiên đường nhiệt đới này.</p>
                                    <Button variant="primary">Tìm Hiểu Thêm</Button>
                                </div>
                            </div>
                        </div>
                    </div>
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