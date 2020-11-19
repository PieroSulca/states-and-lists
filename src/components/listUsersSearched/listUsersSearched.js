import React from 'react'
import './styles.css'

class ListUsersSearched extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="list-users-container">
                {this.props.usersSearch.map(
                    user => {
                        return (
                            <a href="/"
                            className="user-container"
                            >
                                <div className="user-profile">
                                    <img className="user-avatar" src={user.profileImg} alt="profileImage"/>
                                    <div className="user-profileName">
                                        <h5>{user.profile}</h5>
                                        <small>{user.username}</small>
                                    </div>
                                </div>
                            </a>
                        )
                    }
                )}
            </div>
        )
    }
}


export default ListUsersSearched