import React from 'react';
import './BugViewSection.css';

const BugViewSecton = (props) => {
    return (
        <div className="view-section" >
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default BugViewSecton
