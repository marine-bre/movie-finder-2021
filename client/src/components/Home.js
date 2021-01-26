import React from 'react';
import { Link } from 'react-router-dom'
import popcorn from "../pictures/popcorn.png"
import clap from "../pictures/clap.png"


function Home({ children }) {
    return (
        <main className="background">
            <section className="main--menu">
                <Link to="/home" className="links"><h1>THE MOVIE FINDER</h1></Link>
                <div></div>
                <div className="main--list">
                    <Link to="/home" className="links"><h3>Home</h3></Link>
                    <h3>|</h3>
                    <Link to="/quiz-1-p" className="links"><h3>1-Player</h3></Link>
                    <h3>|</h3>
                    <Link to="/start-2-p" className="links"><h3>2-Players</h3></Link>
                </div>

                <img className="main--menu--popcorn" alt="popcorn" src={popcorn}></img>
                <img className="main--menu--clap" alt="clap" src={clap}></img>

            </section>
            <section className="main--section">
                {children}
            </section>
            <footer>
                <div className="footer--sep"></div>
                <p>Copyright 2020-2021 - Marine Bretonniere</p>
            </footer>
        </main>
    );
}

export default Home;