import React from 'react';
import { socket } from '../contexts/socket'

function Choices({ title, posterUrl, overview, handleClick, index, language, setEnd }) {

    const languageFunc = (a) => {
        return (a === 'en') ? 'English' : (a === 'es') ? 'Spanish' : (a === 'fr') ? 'French' : (a === 'ja') ? 'Japanese' : (a === 'ko') ? 'Korean' : (a === 'ru') ? 'Russian' : 'unknown'
    }
    let originLanguage = languageFunc(language)

    const positive = () => {
        socket.emit('yes', index);
        handleClick()
        if (setEnd){
            setEnd(true)
        }
    }

    return (
        <div className='card'>
            <img src={posterUrl} />
            <div className="card--text">
                <h4>{title}</h4>
                <p className='desc'>{overview}</p>
                <h3>Original language: {originLanguage}</h3>
                <div className='btn--wrapper'>
                    <button className='main--btn main--btn--1' onClick={positive}> Yes!</button>
                    <button className='main--btn main--btn--2' onClick={handleClick}> No way.</button>
                </div>
            </div>
        </div>
    );
}

export default Choices;