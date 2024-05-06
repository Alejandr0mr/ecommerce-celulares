import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
        <div>
            <img src={user.picture}/>
        </div>
    )
  )
}

export default Profile