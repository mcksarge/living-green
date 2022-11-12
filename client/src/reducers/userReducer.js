const initialState = {
    user: null
}
let state = {user: null}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case "login":
            return {
                ...state,
                user: action.payload
            };
        case "logout":
            return {
                user: null
            };
        default:
            return state;
    }
}

function dispatch(action){
    state = userReducer(state, action)
    return state;
}

dispatch({type: "login"})

export default userReducer