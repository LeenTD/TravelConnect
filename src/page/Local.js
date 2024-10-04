import React, { useState, useEffect } from 'react';
import '../css/Local.css'; // Import CSS styles
import { FaMale, FaFemale } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';

function Local() {
    const [scity, setSCity] = useState('');
    const [sfullname, setSFullname] = useState('');
    const [results, setResults] = useState([]); // Original user list
    const [filteredResults, setFilteredResults] = useState([]); // State to store filtered results
    const [selectedUser, setSelectedUser] = useState(null); // State to store the selected user for chat
    const [message, setMessage] = useState(''); // State for chat message
    const [chatHistory, setChatHistory] = useState([]); // State for chat history
    const navigate = useNavigate();

    // Retrieve local users from localStorage on component mount
    useEffect(() => {
        const savedUsers = localStorage.getItem('userList');
        if (savedUsers) {
            const users = JSON.parse(savedUsers);
            setResults(users); // Store the original user list
            setFilteredResults(users); // Initialize filtered results
        }
    }, []);

    const handleSearch = () => {
        const filteredUsers = results.filter(user =>
            user.city.toLowerCase().includes(scity.toLowerCase()) &&
            user.fullname.toLowerCase().includes(sfullname.toLowerCase())
        );
        setFilteredResults(filteredUsers); // Update filtered results based on search
    };

    const handleViewProfile = (userId) => {
        navigate(`/profile/${userId}`); // Pass the user's ID in the URL
    };

    const handleContact = (user) => {
        setSelectedUser(user); // Open chat with selected user
        setChatHistory([]); // Reset chat history every time a new chat is opened
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setChatHistory([...chatHistory, { message, sender: 'You' }]);
            setMessage(''); // Reset the message input after sending
        }
    };

    return (
        <div className="search-page">
            <Menu />

            <div className="search-section">
                <h2>Tìm kiếm bạn đồng hành địa phương</h2>
                <div className="search-fields">
                    <input
                        type="text"
                        placeholder="Nhập thành phố"
                        value={scity}
                        onChange={(e) => setSCity(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nhập tên"
                        value={sfullname}
                        onChange={(e) => setSFullname(e.target.value)}
                    />
                    <button onClick={handleSearch}>Tìm kiếm</button>
                </div>
            </div>

            <div className="results-section">
                {filteredResults.length > 0 ? (
                    <div className="user-grid">
                        {filteredResults.map(user => (
                            <div key={user.id} className="user-card">
                                <img src={user.image} alt={user.fullname} className="user-image" />
                                <div className="user-info">
                                    <div className="user-header">
                                        <h3 className="user-name">{user.fullname}</h3>
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

            {/* Chat Box */}
            {selectedUser && (
                <div className="chat-box">
                    <div className="chat-header">
                        <h5>Chat với {selectedUser.fullname}</h5>
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
