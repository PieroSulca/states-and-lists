import React from 'react'
import Trends from '../trends/trends'
import Search from '../search/search'
import profiles from '../../profiles'
import './styles.css';


class SidebarCol extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            profiles: profiles,
        }
    }

    render(){
        return (
            <div className="t-sidebar-col">
                <Search profiles={this.state.profiles}/>
                <Trends />            
            </div>
        )
    }
}

export default SidebarCol;