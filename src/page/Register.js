import React, { useState } from 'react';
import '../css/Register.css'; // Import CSS styles

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleRegister = () => {
        // Implement register logic here
        console.log(email, password, name);
    };

    return (
        <div className="register-container">
            {/* Left Side with Travel Image */}
            <div className="register-image">
                <img src="https://img.cand.com.vn/resize/800x800/NewFiles/Images/2023/09/09/ddd_15573068403031167408145-1694217837154.jpeg" alt="Travel" />
            </div>

            {/* Right Side with Register Form */}
            <div className="register-form">
                <h2>Đăng Ký</h2>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Tên"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button onClick={handleRegister} className="register-button">Đăng Ký</button>
            </div>
        </div>
    );
}

export default Register;
