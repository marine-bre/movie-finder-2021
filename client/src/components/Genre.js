import React, { useRef } from 'react';
import Checkbox from './Checkbox'

const Genre = ({ genres, setGenres }) => {

    const checkList = useRef();

    // const handleCheck = (e) => {
    //     !genres.includes(e.target.id) ? setGenres([...genres, e.target.id]) : setGenres(genres.filter(el => el !== e.target.id))
    //     console.log("geenres" , genres)
    // }

    const check = (e) => {
        
        let cb, id;
        if (e.target.className.includes("checkbox--container")) {
            cb = e.target.childNodes[1]
            id = e.target.id
        }
        else if (e.target.className === "checkbox--text") {
            cb = e.target.parentNode.childNodes[1]
            id = e.target.parentNode.id
        }
        cb.checked ? cb.checked = false : cb.checked = true;
        !genres.includes(id) ? setGenres([...genres, id]) : setGenres(genres.filter(el => el !== e.target.id))
        console.log("genres", genres)
    }


    const allCheck = (e) => {

        // if (e.target.checked === true) {
        if (!genres.includes('all')) {
            setGenres(['all'])
        }
        else {
            setGenres([])
        }
        // }
        // if (e.target.checked === false) {
        //     setGenres([])
        // }
    }


    const arrNum = [28, 12, 14, 878, 18, 9648, 10752, 10749, 35, 27, 36, 16, 53, 80, 99, 10751]
    const arrName = ['Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Drama', 'Mystery', 'War', 'Romance', 'Comedy', 'Horror', 'History', 'Animation', 'Thriller', 'Crime', 'Documentary', 'Family']

    return (

        <div className='quiz'>
            <h4>Choose at least 4 categories of movies</h4>
            <form className="form--container" ref={checkList}>
                {arrNum.map((el, i) => <Checkbox key={el} label={arrName[i]} id={el} check={check} />)}
                <Checkbox label="I don't mind!" id={'all'} check={allCheck} />
            </form>
        </div>
    )
}

export default Genre;