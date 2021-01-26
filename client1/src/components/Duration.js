import React, { useRef } from 'react';
import Checkbox from './Checkbox';

function Duration({ duration, setDuration }) {

    const checkList = useRef();

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
        !duration.includes(id) ? setDuration([...duration, id]) : setDuration(duration.filter(el => el !== id))
        console.log("duration", duration)
    }


    const allCheck = (e) => {
        // if (e.target.checked === true) {
        //     for (let j = 0; j < checkList.current.childNodes.length; j++) {
        //         checkList.current.childNodes[j].childNodes[0].checked = false;
        //         checkList.current.childNodes[j].childNodes[0].disabled = true;
        //     }
        // }
        // if (e.target.checked === false) {
        //     for (let j = 0; j < checkList.current.childNodes.length; j++) {
        //         checkList.current.childNodes[j].childNodes[0].disabled = false;
        //     }
        // }
        // setDuration(['all'])
        if (!duration.includes('all')) {
            setDuration(['all'])
        }
        else {
            setDuration([])
        }
    }


    return (
        <div className='quiz'>
            <h4>How long do you want the movie to be?</h4>
            <form className="form--container" ref={checkList}>
                <Checkbox label='More than 2.5 hours' id={'150'} check={check} />
                <Checkbox label='2 - 2.5 hours' id={'120,150'} check={check} />
                <Checkbox label='1.5 - 2 hours' id={'90,120'} check={check} />
                <Checkbox label=' Less than 1.5 hours' id={'90'} check={check} />
                <Checkbox label="I don't mind!" id={'all'} check={allCheck} />
            </form>
        </div>

    );
}

export default Duration;