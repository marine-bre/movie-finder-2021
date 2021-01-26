import React from 'react';
import ReactDom from 'react-dom'
import '../styles.css'
import { Link } from 'react-router-dom'

function Modal({ title, poster, setShowModal }) {

    return ReactDom.createPortal(
        <>
            <div className='modal--overlay' />
            <div className='modal--results'>
                <h4> There's a match!</h4>
                <img alt='poster' src={poster} />
                <h3 className='m-4'>{title}</h3>
                <div className='btn--wrapper'>
                    <button className='main--btn main--btn--1' onClick={() => setShowModal(false)}>Maybe not...</button>
                    <button className='main--btn main--btn--2'> <Link className="links" to="/thanks">That's it!</Link> </button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default Modal;