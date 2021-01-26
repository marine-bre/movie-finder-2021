import React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';


function Start() {


    return (
        <Home>
            <div className="start--container">
                <div className="start--text">
                    <h2>Have you decided to watch a movie with a friend, or alone, but you can't reach a decision? <br/>
                    You've come to the right place! We'll help you out!
            <br />
                        <br />
            Are you watching a movie alone or with someone?
            </h2>
                </div>
                <div className="btn--wrapper">
                    <button className="main--btn main--btn--1"> <Link className="links" to='/quiz-1-p'> One player</Link></button>
                    <button className="main--btn main--btn--2"> <Link className="links" to='/start-2-p'> Two players</Link></button>
                </div>
            </div>
        </Home>
    );
}

export default Start;