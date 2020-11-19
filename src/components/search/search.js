import React from 'react'
import ListUsersSearched from '../listUsersSearched/listUsersSearched'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import './styles.css'


class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchContent: "",
            searchedUsers: []
        }
    }

    handleSearch = (e) => {
        const user = e.target.value
        this.setState({ searchContent: user })
        this.searchUser()
    }

    searchUser = () => {
        this.props.profiles.filter(u => 
            u.username.toLowerCase().includes(this.state.searchContent.toLowerCase())
        ).map(userSearch => {
            let copySearchedUsers = []
            copySearchedUsers.push(userSearch)
            this.setState({searchedUsers: copySearchedUsers})
        })
    }

    render (){
        return (
            <>
                <div className="search-container">
                    <form onSubmit={this.props.postTweet} className="search-content">
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <input id="searchUser" placeholder="Buscar usuario" type="text" value={this.state.searchContent} onChange={this.handleSearch}/>
                    </form>
                </div>
                {
                    this.state.searchedUsers.length && this.state.searchContent != "" ? <ListUsersSearched usersSearch={this.state.searchedUsers}/> : null
                }
            </>
        )
    }
    
}



export default Search