import React, { useState } from 'react';
import Home from './Home';
import { Link } from 'react-router-dom'

function Thanks() {
    return (
        <Home>
            <div className="thanks--container">
                <h4> Thanks for playing!!!</h4>
                <button className="main--btn main--btn--1"> <Link className="links" to="/home">Start Over</Link> </button>
            </div>
        </Home>
    );
}

export default Thanks;