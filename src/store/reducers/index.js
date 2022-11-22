import {combineReducers} from 'redux'

import authReducer from './authReducer'
import categoryReducer from './categoryReducer'
import appDataReducer from './appDataReducer'

const reducers = combineReducers({
    authState: authReducer,
    categoryState: categoryReducer,
    appDataState: appDataReducer
})

export default reducers