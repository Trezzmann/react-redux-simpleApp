import React,{ useEffect } from 'react'
import { fetchUsers } from "../redux/user/userActions"
import { useSelector, useDispatch } from "react-redux"

function UserContainer() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const users = useSelector(state => state.user )
    
    return (
        <div>
            { users.loading && <h3>Loading...</h3> }
            { users.error ? <p>{users.error}</p> : users.data ? (
                <ul>
                    {users.data.map(user => <p key={user.id}>{user.name}</p>)}
                </ul>
            ):<p>No data</p>}
            
        </div>
    )
}

export default UserContainer
