import {get} from "../../utils/apiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    models: []
};


export const FETCHING_HOME_PENDING = "Dashboard/FETCHING_HOME_PENDING";
export const FETCHING_HOME_SUCCESS = "Dashboard/FETCHING_HOME_SUCCESS";
export const FETCHING_HOME_ERROR = "Dashboard/FETCHING_HOME_ERROR";

export const fetchingHomeDataPending = () => ({
    type: FETCHING_HOME_PENDING
});

export const fetchingHomeDataSuccess = (models) => ({
    type: FETCHING_HOME_SUCCESS,
    payload: models
});

export const fetchingHomeDataError = (error) => ({
    type: FETCHING_HOME_ERROR,
    error: error
});


export const fetchingHomeData = () => async dispatch => {

    dispatch(fetchingHomeDataPending());

    try {
        const userId = localStorage.getItem("user_id");
        const url = `users/${userId}`;
        const userData = await get(url);
        dispatch(fetchingHomeDataSuccess(userData.models));
    } catch (e) {
        console.log(e);
        dispatch(fetchingHomeDataError(e));
    }
}


export default function DashboardReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_HOME_PENDING:
            return {
                ...state,
                isLoading: true,
                error: null,
                models: action.payload
            };
        case FETCHING_HOME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                models: action.payload
            };
        case FETCHING_HOME_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}
