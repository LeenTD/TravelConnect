import React, { useState } from 'react';
import '../css/Local.css'; // Import CSS styles
import { FaMale, FaFemale } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';

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


function Local() {
    const [city, setCity] = useState('');
    const [name, setName] = useState('');
    const [results, setResults] = useState(localUsers);
    const [selectedUser, setSelectedUser] = useState(null); // Trạng thái lưu trữ người dùng đang được liên hệ
    const [message, setMessage] = useState(''); // Trạng thái cho tin nhắn chat
    const [chatHistory, setChatHistory] = useState([]); // Trạng thái cho lịch sử chat

    const navigate = useNavigate();

    const handleSearch = () => {
        const filteredUsers = localUsers.filter(user =>
            user.city.toLowerCase().includes(city.toLowerCase()) &&
            user.name.toLowerCase().includes(name.toLowerCase())
        );
        setResults(filteredUsers);
    };

    const handleViewProfile = (userId) => {
        navigate(`/profile/${userId}`);
    };

    const handleContact = (user) => {
        setSelectedUser(user); // Mở khung chat với người dùng đã chọn
        setChatHistory([]); // Reset lịch sử chat mỗi lần mở một chat mới
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setChatHistory([...chatHistory, { message, sender: 'You' }]);
            setMessage(''); // Reset lại ô nhập tin nhắn sau khi gửi
        }
    };

    return (
        <div className="search-page">
            <div><Menu /></div>

            <div className="search-section">
                <h2>Tìm kiếm bạn đồng hành địa phương</h2>
                <div className="search-fields">
                    <input
                        type="text"
                        placeholder="Nhập thành phố"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nhập tên"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={handleSearch}>Tìm kiếm</button>
                </div>
            </div>

            <div className="results-section">
                {results.length > 0 ? (
                    <div className="user-grid">
                        {results.map(user => (
                            <div key={user.id} className="user-card">
                                <img src={user.img} alt={user.name} className="user-image" />
                                <div className="user-info">
                                    <div className="user-header">
                                        <h3 className="user-name">{user.name}</h3>
                                        <div className="user-age-gender">
                                            <span className="user-age">{user.age}</span>
                                            {user.gender === 'Male' ? <FaMale /> : <FaFemale />}
                                        </div>
                                    </div>
                                    <p>{user.description}</p>
                                    <p>Thời gian rảnh: {user.availability}</p>
                                </div>
                                <div className="card-buttons">
                                    <button onClick={() => handleViewProfile(user.id)}>Xem chi tiết</button>
                                    <button onClick={() => handleContact(user)}>Liên hệ</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Không tìm thấy bạn đồng hành nào.</p>
                )}
            </div>

            {/* Khung chat */}
            {selectedUser && (
                <div className="chat-box">
                    <div className="chat-header">
                        <h5>Chat với {selectedUser.name}</h5>
                        <button onClick={() => setSelectedUser(null)}>×</button>
                    </div>
                    <div className="chat-history">
                        {chatHistory.map((chat, index) => (
                            <div key={index} className={`chat-message ${chat.sender === 'You' ? 'sent' : 'received'}`}>
                                <strong>{chat.sender}:</strong> {chat.message}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Nhập tin nhắn..."
                        />
                        <button onClick={handleSendMessage}>Gửi</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Local;
