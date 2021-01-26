import React, { useState, useEffect} from 'react';
import Choices from './Card.js'
import Home from './Home';
import { Redirect } from 'react-router-dom';


function Results1P(props) {
    const API_KEY = '8982e86b777795ad75ed8d30e1701d9c'
    let {genre, durations, years} = props.location.state
    const [url,setUrl] = useState('')
    const [end,setEnd] = useState('')

    useEffect(()=>{
        console.log(genre, durations,years)
        genre === ["all"]? genre = "" : genre = "with_genres" + genre.join("|");
        if (durations.join("") === "all"){
            durations = ""
        } 
        else{
            durations = durations.join(",").split(",")
            durations = `&with_runtime.gte=${Math.min(...durations)}&with_runtime.lte=${Math.max(...durations)}`
        }
        if (years.join("") === "all"){
            years = ""
        } 
        else{
            years = years.join(",").split(",")
            years = `&primary_release_date.gte=${Math.min(...years)}-01-01&primary_release_date.lte=${Math.max(...years)}-01-01`
        }
    setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&${genre}${durations}${years}`);
    },[])


    //variables needed to register results from the api
    const allTitles = []
    const allPosterUrl = [];
    const allOverview = [];
    const allLanguage = [];

    const [index, setIndex] = useState(0);

    const [title, setTitle] = useState([]);
    const [posterUrl, setPosterUrl] = useState([]);
    const [overview, setOverview] = useState([]);
    const [language, setLanguage] = useState([]);

    //fetching function defined here that will be called later on
    const fetching = async () => {
        console.log(url)
        const data = await fetch(url)
        const response = await data.json()
        console.log(response);
        for (let i = 0; i < 20; i++) {
            await allTitles.push(response.results[i].title);
            await allPosterUrl.push('https://image.tmdb.org/t/p/w440_and_h660_face' + response.results[i].poster_path);
            await allOverview.push(response.results[i].overview)
            await allLanguage.push(response.results[i].original_language)
        }
        setTitle(allTitles)
        setPosterUrl(allPosterUrl)
        setOverview(allOverview)
        setLanguage(allLanguage)
    }

    useEffect(() => {
        if(url.length>0)
        fetching()
        console.log(url)
    }, [url])

    const handleClick = (e) => {
        setIndex(index + 1)
    }

    return (
        <Home>
             <div className="card--wrapper">
            {(index < 20 && setTitle !== [] && !end) &&
                <Choices title={title[index]} posterUrl={posterUrl[index]} overview={overview[index]} language={language[index]} index={index} handleClick={handleClick} setEnd={setEnd}></Choices>
            }
            {(end || index === 20) && <Redirect to="/thanks" />}
        </div>
        </Home>
    )
}

export default Results1P;