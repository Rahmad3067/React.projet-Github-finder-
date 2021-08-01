import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'


// instead of class we can use functional components
const Users = ({ users, loading }) => {
    // we can use our spinner image for while the page searching for the information
    if( loading){
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );

    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    users: PropTypes.bool.isRequired,
}





// Styles
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
