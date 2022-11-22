const initialState = {
  user: null,
};

const appDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_app_data":
      return {
        ...state,
        user: action.payload.user,
      };
    case "remove_add_data":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default appDataReducer;
