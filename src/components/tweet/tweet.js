import React from 'react';
import './styles.css';

import HeartOutline from '../../Icons/heart-shape-outline.svg';
import RetweetOutline from '../../Icons/retweet.svg';
import CommentOutline from '../../Icons/speech-bubble.svg';

class Tweet extends React.Component{
    constructor() {
        super();
        this.state = {
            iconRT: RetweetOutline,
            iconComment: CommentOutline,
            iconLike: HeartOutline
        }
    }

    render(){
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div className="reactions">
                    <div className="row">
                        <img className="icon-reaction comments" src={this.state.iconComment} alt="comments"></img>
                        <p>{this.props.comments}</p>
                    </div>
                    <div className="row">
                        <img className="icon-reaction retweets" src={this.state.iconRT} alt="retweets"></img>
                        <p>{this.props.retweets}</p>
                    </div>
                    <div className="row">
                        <img className="icon-reaction likes" src={this.state.iconLike} alt="likes"></img>
                        <p>{this.props.likes}</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.