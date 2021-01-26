import React, { useRef, useState } from 'react';

function Checkbox({ label, id, check }) {

    const checkbox = useRef()

    const [active, setActive] = useState("")

    const handleChange = (e) => {
        active == '' ? setActive("checkbox--container--active") : setActive("");
        check(e)
    }

    return (
        <div className={`checkbox--container ${active}`} id={id} onClick={handleChange}>
            <p className="checkbox--text">{label}</p>
            <input type="checkbox" ref={checkbox} className="checkbox" />
        </div>
    );
}

export default Checkbox;