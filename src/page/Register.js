import React, { useState } from 'react';
import '../css/Register.css'; // Import CSS styles

function Register() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [city, setCity] = useState('');
    const [age, setAge] = useState('');
    const [hobby, setHobby] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Logic đăng ký
        console.log({ name, username, password, repeatPassword, city, age, hobby });
    };

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: '#8fc4b7' }}>
            <div className="container py-4 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-6 col-xl-5">
                        <div className="card rounded-3">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                                className="w-100"
                                style={{ borderTopLeftRadius: '.3rem', borderTopRightRadius: '.3rem' }}
                                alt="Sample"
                            />
                            <div className="card-body p-3">
                                <h3 className="mb-4 pb-2">Register</h3>
                                <form onSubmit={handleRegister}>
                                    {/* Full Name */}
                                    <div className="form-outline mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            placeholder="Full Name"
                                        />
                                    </div>

                                    {/* Username */}
                                    <div className="form-outline mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            placeholder="Username"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="form-outline mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            placeholder="Password"
                                        />
                                    </div>

                                    {/* Repeat Password */}
                                    <div className="form-outline mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={repeatPassword}
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                            required
                                            placeholder="Repeat Password"
                                        />
                                    </div>

                                    {/* City */}
                                    <div className="form-outline mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            required
                                            placeholder="City"
                                        />
                                    </div>

                                    {/* Age */}
                                    <div className="mb-3">
                                        <select
                                            className="form-select"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            required
                                        >
                                            <option value="" disabled>
                                                Age
                                            </option>
                                            {[...Array(100).keys()].map((age) => (
                                                <option key={age + 1} value={age + 1}>
                                                    {age + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Hobby */}
                                    <div className="form-outline mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={hobby}
                                            onChange={(e) => setHobby(e.target.value)}
                                            required
                                            placeholder="Hobby"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button type="submit" className="btn btn-success btn-lg w-100">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;