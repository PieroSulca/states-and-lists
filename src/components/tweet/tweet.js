import React from 'react';
import './styles.css';

import HeartOutline from '../../Icons/heart-shape-outline.svg';
import RetweetOutline from '../../Icons/retweet.svg';
import CommentOutline from '../../Icons/speech-bubble.svg';

class Tweet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            iconRT: RetweetOutline,
            iconComment: CommentOutline,
            iconLike: HeartOutline,
            toggleRT: false,
            toggleLike: false,
            nRetweets: this.props.retweets,
            nLikes: this.props.likes
        }
    }

    handleClickRT = () => {
        this.state.toggleRT ? 
                                this.setState({
                                    toggleRT: false,
                                    nRetweets: this.state.nRetweets-1
                                })
                                :
                                this.setState({
                                    toggleRT: true,
                                    nRetweets: this.state.nRetweets+1
                                })
    }

    handleClickLike = () => {
        this.state.toggleLike ? 
                                this.setState({
                                    toggleLike: false,
                                    nLikes: this.state.nLikes-1
                                })
                                :
                                this.setState({
                                    toggleLike: true,
                                    nLikes: this.state.nLikes+1
                                })
    }

    render(){

        let _styleLike, _styleLikeIcon, _styleRT, _styleRTIcon
        if (this.state.toggleLike){
            _styleLike = { 
                color: "rgb(188, 60, 106)" 
            } 
            _styleLikeIcon = {
                background: 'rgb(188, 60, 106)'
            }
        } 
        if (this.state.toggleRT){
            _styleRT = { 
                color: "rgb(24, 190, 100)" 
            } 
            _styleRTIcon = {
                background: 'rgb(24, 190, 100)'
            }
        } 

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
                    <div className="row comments">
                        <img className="icon-reaction" src={this.state.iconComment} alt="comments"></img>
                        <p>{this.props.comments}</p>
                    </div>
                    <div className="row retweets" onClick={this.handleClickRT} style={_styleRT}>
                        <img className="icon-reaction retweets-icon" src={this.state.iconRT} alt="retweets" style={_styleRTIcon}></img>
                        <p>{this.state.nRetweets}</p>
                    </div>
                    <div className="row likes" likes onClick={this.handleClickLike} style={_styleLike}>
                        <img className="icon-reaction likes-icon" src={this.state.iconLike} alt="likes" style={_styleLikeIcon}></img>
                        <p>{this.state.nLikes}</p>
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