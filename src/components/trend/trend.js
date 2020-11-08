import React from 'react'

export default class Trend extends React.Component{
    constructor (){
        super()
    }

    render(){
        return (
            <div className="trend-container">
                <p>{this.props.category}</p>
                <h5>{this.props.title}</h5>
                <p>{this.props.tweets}</p>
            </div>
        );
    }
}