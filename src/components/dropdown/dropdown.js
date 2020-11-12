import React from 'react'
import './styles.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

class Dropdown extends React.Component {
    
    constructor(props){
        super(props)
    }
    
    deleteFn = () => {
        this.props.deleteTweet(this.props.index)
        this.props.closeDropM()
    }

    render() {
        return (
            <div className="dropdown-container">
                <div className="dropdown-row">
                    <FontAwesomeIcon icon={faTrash} />
                    <span onClick={this.deleteFn}>| Eliminar Tweet</span>
                </div>
            </div>
        );
    }
}

export default Dropdown

