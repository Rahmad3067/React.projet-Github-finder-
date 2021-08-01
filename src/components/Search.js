import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ""
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text : '' })
    }

onChange= (e) => {
    // To write this function once and we can search by email or name so we can use this method e.target.name so we can searche with what ever entered in the input
    this.setState({ [e.target.name]: e.target.value})
}

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type='text' name="text" placeholder="Search Users..." value={this.state.Text} onChange={this.onChange}/>
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
