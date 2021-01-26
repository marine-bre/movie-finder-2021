import React, { useState } from 'react';
import Home from './Home';
import Genre from './Genre';
import Duration from './Duration';
import Year from './Year';
import { Redirect } from 'react-router-dom';



function Quiz1P(props) {

    const [genres, setGenres] = useState([]);
    const [duration, setDuration] = useState([])
    const [year, setYear] = useState([])
    const [complete, setComplete] = useState(false)

    const submit = (e) => {
        if ((genres.length >= 4 || genres.includes('all')) && ((year.length > 0 && year.length <= 4) || year.includes('all')) && ((duration.length > 0 && duration.length <= 4) || duration.includes('all'))) {
            setComplete(true);
        }
        else {
            e.preventDefault()
        }
    }

    return (
        <Home>
        <div className="quiz--container">
            <Genre genres={genres} setGenres={setGenres} />
            <Duration duration={duration} setDuration={setDuration} />
            <Year year={year} setYear={setYear} />
            <button className='main--btn main--btn--1' onClick={submit}>Next</button>    
        </div>

        {complete && <Redirect to={{
            pathname: "/results-1-p",
            state: {
                genre: genres,
                durations: duration,
                years: year,
            }
        }}
        ></Redirect>}
    </Home>
    );
}

export default Quiz1P;