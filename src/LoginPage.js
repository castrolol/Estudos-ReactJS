import React from 'react';
import './LoginPage.css';

export default function LoginPage() {

    return (
        <>
        <h1>Hello World!</h1>
        <form action="">
            <label htmlFor="userBox">Username</label>
            <input type="text" id="userBox" className="textBox" />

            <label htmlFor="passwordBox">Password</label>
            <input type="password" id="passwordBox" className="textBox" />

            <button className="submitButton">Enviar</button>
        </form>
        </>
    )
}