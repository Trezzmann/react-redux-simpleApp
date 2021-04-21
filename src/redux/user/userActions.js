import {FETCH_USER_FAILED,FETCH_USER_SUCCESS,FETCH_USER_LOADING} from "./userTypes"
import axios from "axios"

export const fetchUserLoading = ()=>{
    return{ 
        type:FETCH_USER_LOADING
    }
}

export const fetchUserSuccess = (data)=>{
    return{ 
        type:FETCH_USER_SUCCESS,
        payload:data
    }
}

export const fetchUserFailed = (error)=>{
    return{ 
        type:FETCH_USER_FAILED,
        payload:error
    }
}

export const fetchUsers = () => dispatch => {
    dispatch(fetchUserLoading())
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res =>{
            console.log(res.data)
            dispatch(fetchUserSuccess(res.data))
        })
        .catch(error => {
            dispatch(fetchUserFailed(error))
        })
}