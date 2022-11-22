const initialState ={
    token: localStorage.getItem("token"),
}

const authReducer = (state = initialState, action)=>{
switch(action.type){
        case "set_token":
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token
            }          
        case "remove_token":
            return {
                ...state,
                token: null,
            }
        default:
            return state
    }
} 

export default authReducer