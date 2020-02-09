import React from 'react';
import './LoginPage.css';

export default function LoginPage() {
    return (
        <>
        <h1>Hello World</h1>
        
        <form action="" className="flex-container">
            <label htmlFor="userInput" id="form-layout">
                Username <input type="text" id="userInput"  name="username" />
            </label>
        
            <label htmlFor="passInput" id="form-layout">
                Password <input type="password" id="passInput"  name="password" />
            </label>
        
            <input type="submit" value="Login" />
        </form>
        </>
    )
}

