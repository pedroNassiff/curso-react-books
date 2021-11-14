import React, { useContext } from 'react'
import { UserContext } from './UserContext';


function LoginContext() {
    const {user, setUser} = useContext(UserContext);

    console.log(user, setUser);
    
    return (
        <div>
            <>
                {JSON.stringify(user)}
                <button onClick={() => setUser({id: 1, nombre: "cosme fulano"})}>Login</button>
            </>
        </div>
    )
}


export default LoginContext; 