export const initialState = {
    isLoading: false,
    isAuthenticated: !!localStorage.getItem("id_token"),
    error: null
};

export const START_LOGIN = "Login/START_LOGIN";
export const LOGIN_SUCCESS = "Login/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "Login/LOGIN_FAILURE";
export const RESET_ERROR = "Login/RESET_ERROR";
export const LOGIN_USER = "Login/LOGIN_USER";
export const SIGN_OUT_SUCCESS = "Login/SIGN_OUT_SUCCESS";

export const startLogin = () => ({
    type: START_LOGIN
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const resetError = () => ({
    type: RESET_ERROR
});


export const loginUser = (tokenId) => dispatch => {

    dispatch(startLogin());

    if (tokenId) {
         // TODO agrojas: use config host
        fetch('http://localhost:9090/users/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({token: tokenId}),
            })
            .then(function(response) {
              localStorage.setItem("id_token", tokenId);
                dispatch(loginSuccess());
            return response;
            })
            .catch(function (error) {
                 dispatch(loginFailure());
            return error;
            })
    } else {
        dispatch(loginFailure());
    }
};

export const signOutSuccess = () => ({
    type: SIGN_OUT_SUCCESS
});

export const signOut = () => dispatch => {
    localStorage.removeItem("id_token");
    dispatch(signOutSuccess());
};

export default function LoginReducer(state = initialState, {type, payload}) {
    switch (type) {
        case START_LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            };
        case RESET_ERROR:
            return {
                error: false
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
}
