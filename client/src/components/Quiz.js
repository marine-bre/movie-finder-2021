import React, { useState, useEffect } from 'react';
import Home from './Home';
import Genre from './Genre';
import Duration from './Duration';
import Year from './Year';
import { SocketListen, socket } from '../contexts/socket'
import { Redirect } from 'react-router-dom';

function Quiz(props) {

    const [genres, setGenres] = useState([]);
    const [duration, setDuration] = useState([])
    const [year, setYear] = useState([])
    const [complete, setComplete] = useState(false)
    const [preferences, setPreferences] = useState('')
    const [received, setReceived] = useState(false);

    const submit = (e) => {
        if ((genres.length >= 4 || genres.includes('all')) && ((year.length > 0 && year.length <= 4) || year.includes('all')) && ((duration.length > 0 && duration.length <= 4) || duration.includes('all'))) {
            setComplete(true);
        }
        else {
            e.preventDefault()
        }
    }

    //sending own choices to server as soon as questionnaire is completed  
    useEffect(() => {
        if (complete === true) {
            socket.emit('preferences', { genres, duration, year })
            console.log(preferences)
        }
    }
        , [complete])

    return (
        <Home>
            <SocketListen setPreferences={setPreferences} preferences={preferences} setReceived={setReceived}/>
            <div className="quiz--container">
                <Genre genres={genres} setGenres={setGenres} />
                <Duration duration={duration} setDuration={setDuration} />
                <Year year={year} setYear={setYear} />
                <button className='main--btn main--btn--1' onClick={submit}>Next</button>

                {(complete) &&
                    <div className="spinner--container">
                            <svg className="spinner" height="42" width="42">
                                <circle cx="21" cy="21" r="19" stroke="#F3903D" fill="none" stroke-dasharray="100" stroke-width="2" />
                            </svg>
                        <h3>Waiting for the other player to complete the quiz...</h3>
                    </div>}

            </div>


            {(received && complete) && <Redirect to={{
                pathname: "/results",
                state: {
                    genre: genres,
                    durations: duration,
                    years: year,
                    preferences: preferences
                }
            }}
            ></Redirect>}
        </Home>
    );
}


export default Quiz;
