import React from 'react';
import './LoginPage.css';

export default function LoginPage() {
    return (
        <>
        
        <div className="flex-container">
            <h1>Hello World</h1>
        </div>

        <div className="flex-container">
            <form action="">
                <label htmlFor="userInput">
                    Username <input type="text" id="userInput"  name="username" />
                </label>

                <label htmlFor="passInput">
                    Password <input type="password" id="passInput"  name="password" />
                </label>

                <input type="submit" value="Login" />
            </form>
        </div>
        </>
    )
}
