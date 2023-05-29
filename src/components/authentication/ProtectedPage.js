import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

const ProtectedPage = () => {
    const { authenticated } = useContext(AuthContext);
  return (
    <div>
        {authenticated ? (
            <h2>Welcome to the protected page!</h2>
        ):(
            <h2>Please login to access protected page</h2>
        )}
    </div>
  )
}

export default ProtectedPage