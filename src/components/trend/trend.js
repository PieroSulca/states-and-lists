import React from 'react'

const Trend = (props) => {

    return (
        <div className="trend-container">
            <p>{props.category}</p>
            <h5>{props.title}</h5>
            <p>{props.tweets}</p>
        </div>
    );
}

export default Trend