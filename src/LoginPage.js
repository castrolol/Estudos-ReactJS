import React from 'react';
import './LoginPage.css';

export default function LoginPage() {
    return (
        <>
            <div className="row">
                <div className="logo">
                    <h1>Hello World</h1>
                </div>

                <div className="form">
                    <form action=""  >
                        <h1>Hellow World Login</h1>
                        <label htmlFor="userInput" id="form-layout">
                            Username <input type="text" id="userInput" name="username" />
                        </label>

                        <label htmlFor="passInput" id="form-layout">
                            Password <input type="password" id="passInput" name="password" />
                        </label>

                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </>
    )
}

