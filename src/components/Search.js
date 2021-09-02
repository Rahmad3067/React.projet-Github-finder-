import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text: ""
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === "") {
            // On the function set alert the first one is the (msg) that i send up to the App and the second one is the (type) that i also send it up to the APP
            this.props.setAlert( 'Please enter a Github user', 'light' );
        } else {
            this.props.searchUsers(this.state.text);
            this.setState( { text : '' } )

        }
    }

onChange= (e) => {
    // To write this function once and we can search by email or name so we can use this method e.target.name so we can searche with what ever entered in the input
    this.setState({ [ e.target.name ]: e.target.value})
}

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type='text' name="text" placeholder="Search Users..." value={this.state.Text} onChange={this.onChange}/>
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
                { this.props.showClear && ( <button className="btn btn-primary-color btn-block" onClick={this.props.clearUsers}>Clear</button> )}
                
            </div>
        )
    }
}

export default Search
