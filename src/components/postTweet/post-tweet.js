import React from 'react';
import './styles.css';

class PostTweet extends React.Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div>
                <div className="t-row t-post-tweet">
                    <div className="t-profile-img">
                        <img src={this.props.profileUrl}  alt="profile" />
                    </div>
                    <form onSubmit={this.props.postTweet}>
                        <input placeholder="¿Qué está pasando?" type="text" value={this.props.newTweet} onChange={this.props.handleInput}/>
                        <div className="t-post-options">
                            <button>Twittear</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default PostTweet;