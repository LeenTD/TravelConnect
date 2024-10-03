import React, { useState } from 'react';
import '../css/Login.css'; // Import CSS styles

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement login logic here
        console.log(email, password);
    };

    return (
        <div className="login-container">
            {/* Left Side with Travel Image */}
            <div className="login-image">
                <img src="https://img.cand.com.vn/resize/800x800/NewFiles/Images/2023/09/09/ddd_15573068403031167408145-1694217837154.jpeg" alt="Travel" />
            </div>

            {/* Right Side with Login Form */}
            <div className="login-form">
                <h2>Đăng Nhập</h2>
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
                <button onClick={handleLogin} className="login-button">Đăng Nhập</button>
            </div>
        </div>
    );
}

export default Login;
