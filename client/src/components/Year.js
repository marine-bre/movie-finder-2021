import React, { useRef } from 'react';
import Checkbox from './Checkbox'

function Year({ year, setYear}) {

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
        cb.checked? cb.checked = false : cb.checked = true;
        !year.includes(id) ? setYear([...year, id]) : setYear(year.filter(el => el !== id))
        console.log("years" , year)
    }


    const allCheck = (e) => {
        if (!year.includes('all')) {
            setYear(['all'])
        }
        else {
            setYear([])
        }
    }

    return (

        <div className='quiz'>
        <h4>How old/recent do you want the movie to be?</h4>
            <form className="form--container" ref={checkList}>
                <Checkbox label='2015-2021' id={'2015,2021'} check={check}/>
                <Checkbox  label='2010-2014' id={'2010,2014'} check={check}/>
                <Checkbox label='2005-2009' id={'2005,2009'} check={check}/>
                <Checkbox label='2000-2004' id={'2000,2004'} check={check}/>
                <Checkbox label='Before 2000!' id={'2000'} check={check}/>
                <Checkbox label="I don't mind!" id={'all'} check={allCheck}/>
            </form>
</div>
    );
}

export default Year;