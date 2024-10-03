import React from 'react';
import { useParams } from 'react-router-dom';
import { FaMale, FaFemale } from 'react-icons/fa';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Profile.css';


const localUsers = [
    { id: 1, name: 'John Doe', city: 'Paris', age: 30, gender: 'Male', description: 'I love traveling and meeting new people.', availability: 'September', img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 2, name: 'Jane Smith', city: 'New York', age: 25, gender: 'Female', description: 'New York native looking to explore new cultures.', availability: 'October', img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 3, name: 'Michael Johnson', city: 'London', age: 28, gender: 'Male', description: 'I can show you the best places in London.', availability: 'November', img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 4, name: 'Emily Davis', city: 'Berlin', age: 32, gender: 'Female', description: 'Berlin is full of history. Let’s explore it together.', availability: 'December', img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg' },
    { id: 5, name: 'David Lee', city: 'Tokyo', age: 29, gender: 'Male', description: 'Tokyo is my home. I can take you to hidden gems.', availability: 'September', img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg' },
    { id: 6, name: 'Sophia Wilson', city: 'Sydney', age: 26, gender: 'Female', description: 'I love surfing and would love to show you around Sydney.', availability: 'October', img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg' },
    { id: 7, name: 'Chris Brown', city: 'San Francisco', age: 31, gender: 'Male', description: 'San Francisco has the best spots. Let’s explore together.', availability: 'November', img: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg' },
    { id: 8, name: 'Olivia Taylor', city: 'Toronto', age: 27, gender: 'Female', description: 'I can show you around Toronto’s downtown and hidden gems.', availability: 'December', img: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid' },
    { id: 9, name: 'Alex Martinez', city: 'Barcelona', age: 33, gender: 'Male', description: 'Barcelona has the best food and sights, let’s enjoy it.', availability: 'October', img: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid' },
    { id: 10, name: 'Laura Clark', city: 'Rome', age: 28, gender: 'Female', description: 'Join me on a tour of Rome’s ancient history and cuisine.', availability: 'November', img: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid' },
];

function Profile() {
    const { id } = useParams();
    const user = localUsers.find(user => user.id === parseInt(id));

    if (!user) {
        return <div>Người dùng không tồn tại!</div>;
    }

    return (
        <div className="profile-page">
            <div><Menu /></div>

            <div className="profile-container">
                <div className="profile-header">
                    <h2>Thông tin chi tiết</h2>
                </div>

                <div className="profile-content">
                    <div className="profile-image">
                        <img src={user.img} alt={user.name} />
                    </div>
                    <div className="profile-details">
                        <h3>{user.name}</h3>
                        <p>Thành phố: {user.city}</p>
                        <p>Tuổi: {user.age}</p>
                        <p>
                            Giới tính: {user.gender === 'Male' ? <FaMale /> : <FaFemale />}
                        </p>
                        <p>Mô tả: {user.description}</p>
                        <p>Thời gian rảnh: {user.availability}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
