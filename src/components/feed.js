import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed
        }
    }

    deleteFn = (index) => {
        feed.splice(index, 1)
        this.setState({tweets: feed})
    }

    render() {

        const {profile, profileName, username, content, display} = {
            profile: "",
            profileName: "",
            username: "",
            content: "",
            display: ""
        };

        return (
            <div className="tweet-feed">
                {
                    this.state.tweets.map( (tweet, i) => {
                        return (
                            <Tweet
                                profile={tweet.profile}
                                profileUrl={profileName}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}
                                deleteTweet={this.deleteFn}
                                index={i}
                            />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;