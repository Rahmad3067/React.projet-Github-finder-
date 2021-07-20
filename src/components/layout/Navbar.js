import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {

    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-githun'
    }; 

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    };

    render() {
        return (
            <nav className='navbar bg-success'>
                <h1>
                    <i className={this.props.icon} /> {this.props.title}
                    </h1>
            </nav>
        )
    }
}

export default Navbar
