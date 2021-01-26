import React, { useState } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';
import { socket } from '../contexts/socket';


function Start2P(props) {

    const [code, setCode] = useState('')
    console.log(code)

    const handleClick = (e) => {
        if (code) {
            socket.emit('room', code)
            setCode('')
        }
        else {
            e.preventDefault();
            alert('you must enter a valid code')
        }
    }

    const keyPressEvent = (e) => {
        if ((e.which || e.charCode || e.keyCode) === 13) { handleClick() }
    }

    return (
        <Home>
            <div className="start--container">
                <div className="start--text">
                    <h2>
                        <strong>To start, follow those simple instructions:</strong>
                        <br/>1. Connect both your devices to the website
                        <br/>2. Enter a secret password that you chose with your friend
                        <br/>3. Answer a few questions
                        <br/>4. Voila! You've got a movie selection based on both your preferences!
                    </h2>
                </div>
                <h3>Enter your password and press start to begin!</h3>
                <input onChange={(e) => setCode(e.target.value)} value={code} type='text' className='start--input' onKeyPress={keyPressEvent}></input>
                <button className="main--btn main--btn--1"> <Link className="links" onClick={handleClick} to="/quiz-2-p"> Start</Link></button>
            </div>
        </Home>
    );
}

export default Start2P;