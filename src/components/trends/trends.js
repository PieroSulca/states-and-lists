import Trend from '../trend/trend'
import trends from '../../trends';

import React, {Component} from 'react'

export default class Trends extends Component {
    constructor(){
        super();
        this.state = {
            trends: trends
        }
    }

    render(){
        return (
            <>
                <h3 className="title-trends">Qué está pasando</h3>
                {this.state.trends.map( t => {
                    return (
                        <Trend category={t.category} title={t.title} tweets={t.noTweets}/>
                    );
                })}
            </>
        );
    }
}