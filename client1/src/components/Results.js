import React, { useEffect, useState } from 'react';
import Home from './Home.js';
import Fetching from './Fetching.js';

function Results(props) {

    const [url, setUrl] = useState('')
    const API_KEY = '8982e86b777795ad75ed8d30e1701d9c'

    const { genres, duration, year } = props.location.state.preferences
    const genre = props.location.state.genre;
    const durations = props.location.state.durations;
    const years = props.location.state.years;

    //combination of choices takes place in this component

    //combined genres
    let combinedGenres = []
    const combineG = () => {
        for (let i = 0; i < genre.length; i++) {
            if (genres.indexOf(genre[i]) !== -1) {
                combinedGenres.push(genre[i])
            }
        }
        if (combinedGenres.length === 0) {
            combinedGenres = genres.concat(genre)
            if (combinedGenres.includes('all')) {
                combinedGenres.splice((combinedGenres.indexOf('all')), 1)
            }
        }
        combinedGenres = combinedGenres.join('|')
        console.log(combinedGenres)
    }

    //combined duration 
    let combinedDuration = []
    const combineD = () => {
        let durationArr = ((durations.toString()).concat(',').concat(duration.toString())).split(',')
        durationArr = durationArr.filter(el => (/\d+/).test(el))
        combinedDuration.push(`&with_runtime.gte=${Math.min(...durationArr)}&with_runtime.lte=${Math.max(...durationArr)}`)
    }

    //combined duration 
    let combinedYear = [];
    const combineY = () => {
        let yearsArr = ((years.toString()).concat(',').concat(year.toString())).split(',')
        yearsArr = yearsArr.filter(el => (/\d+/).test(el))
        combinedYear.push(`&primary_release_date.gte=${Math.min(...yearsArr)}-01-01&primary_release_date.lte=${Math.max(...yearsArr)}-01-01`)
    }


    useEffect(() => {
        combineG()
        combineD()
        combineY()
        setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&with_genres=${combinedGenres}${combinedDuration}${combinedYear}`)
    }, [])

    return (
        <Home>
            {url && <Fetching url={url} />}
        </Home>
    )
}

export default Results;