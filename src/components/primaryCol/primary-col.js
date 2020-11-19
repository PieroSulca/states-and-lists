import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';

class PrimaryCol extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newTweet: ""
        }
    }

    handleInput = (e) => {
        const tweet = e.target.value;
        this.setState({ newTweet: tweet });
    }

    addNewTweetFn = (e) => {
        this.mainFeed.addTweet(this.state.newTweet)
        e.preventDefault()
        this.setState({newTweet: ""})
    }

    
    render () {
        return (
            <div className="t-col-container">
                <h3>Inicio</h3>
                <PostTweet profileUrl={this.props.profileUrl}  
                    newTweet={this.state.newTweet}
                    handleInput={this.handleInput}
                    postTweet={this.addNewTweetFn}
                />
                <Feed ref={elem => {this.mainFeed = elem}} />
            </div>
        )
    }
}

export default PrimaryCol;