import {get} from "../../utils/ApiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    models: []
};


export const FETCHING_HOME_PENDING = "Home/FETCHING_HOME_PENDING";
export const FETCHING_HOME_SUCCESS = "Home/FETCHING_HOME_SUCCESS";
export const FETCHING_HOME_ERROR = "Home/FETCHING_HOME_ERROR";

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


export const fetchingHomeData = (props) => async dispatch => {
    dispatch(fetchingHomeDataPending());
    let colorMap = {
        "WAITING": "error.main",
        "INITIATED": "primary.main",
        "IN_PRGRESS": "primary.main",
        "FINISHED": "grey.500"
    };
    try {
        const userId = localStorage.getItem("model_buyer_user_id");
        const url = `users/${userId}`;
        const userData = await get(url);
        let models = userData.models;
        models = models.map(model => {
            model.status_color = colorMap[model.status];
            model.improvement = (model.improvement * 100).toFixed(2);
            model.cost = model.cost.toFixed(1);
            return model;
        });
        dispatch(fetchingHomeDataSuccess(models));
    } catch (e) {
        props.history.push(`/login`)
        dispatch(fetchingHomeDataError(e));

    }
};


export default function HomeReducer(state = initialState, action) {
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
                error: action.error,
                models:[]
            };
        default:
            return state;
    }
}
