import React, { useContext } from 'react'
import { UserContext } from './UserContext';


function LogoutContext() {
    const {user, setUser} = useContext(UserContext);

    console.log(user, setUser);
    
    return (
        <div>
            <>
            <h1>Logout</h1>
                {JSON.stringify(user)}
                <button onClick={() => setUser({id: 1, nombre: "cosme fulano"})}>LogOut</button>
            </>
        </div>
    )
}


export default LogoutContext; 