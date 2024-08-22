import React from 'react';
import '../Styles/Hero.css';

function TriggerButton({ handleClick }) {
    return (
        <button onClick={handleClick} className='hero--button'>
            Sign up
        </button>
    );
}

export default TriggerButton;