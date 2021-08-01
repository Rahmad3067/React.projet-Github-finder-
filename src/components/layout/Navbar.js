import React from 'react'
import PropTypes from 'prop-types'



// Functional components
const Navbar = ({ icon, title }) => {
        return (
            <nav className='navbar bg-success'>
                <h1>
                    <i className={icon} /> {title}
                    </h1>
            </nav>
        );
    }

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-githun'
}; 

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar
