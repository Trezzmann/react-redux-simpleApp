import {FETCH_USER_FAILED,FETCH_USER_SUCCESS,FETCH_USER_LOADING} from "./userTypes"

const initialState = {
    loading: false,
    data:[],
    error:''
}

const userReducer = (state=initialState, action) =>{
    switch (action.type) {
        case FETCH_USER_LOADING:
            return { 
                ...state,
                loading: true
            }
        
            case FETCH_USER_SUCCESS:
                return {
                    loading: false,
                    data: action.payload,
                    error:''
                }
            
            case FETCH_USER_FAILED: 
                return { 
                    loading: false,
                    data: [],
                    error:action.payload
                }
    
        default:return state
    }
}

export default userReducer