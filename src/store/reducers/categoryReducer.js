const initialState ={
    categories: null,
}

const categoryReducer = (state = initialState, action)=>{
    switch(action.type){
        case "set_categories":
            return {
                ...state,
                categories: action.payload.categories
            }          
       
        default:
            return state
    }
} 

export default categoryReducer