import React, { useState } from "react";

export const Login = (props) => {
    const [name, setname] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Username</label>
                <input value={name} onChange={(e) => setname(e.target.value)}type="name" placeholder="name" id="name" name="name" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
        </div>
    )
}