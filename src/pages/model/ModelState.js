import {get} from "../../utils/ApiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    data: null,
    model: {
        status: null,
        id: null,
        weights: null,
        type: null
    },
    metrics: {
        iterations: null,
        improvement: null
    }
};


export const FETCHING_MODEL_PENDING = "Home/FETCHING_MODEL_PENDING";
export const FETCHING_MODEL_ERROR = "Home/FETCHING_MODEL_ERROR";
export const FETCHING_MODEL_DATA = "Home/FETCHING_MODEL_DATA";
export const FETCHING_MODEL_METRICS = "Home/FETCHING_MODEL_METRICS";


export const fetchingModelDataPending = () => ({
    type: FETCHING_MODEL_PENDING
});


export const fetchingModelDataError = (error) => ({
    type: FETCHING_MODEL_ERROR,
    error: error
});


export const fetchingModelDataField = (type, status) => ({
    type: type,
    payload: status
});

export const dispatchModelDataSuccess = (dispatch, model) => {
    dispatch(fetchingModelDataField(FETCHING_MODEL_DATA, model.model));
    dispatch(fetchingModelDataField(FETCHING_MODEL_METRICS, model.metrics));
}

export const fetchingModelData = (props) => async dispatch => {

    dispatch(fetchingModelDataPending());

    try {

        const modelId = props.location.pathname.split("/").pop()
        const url = `models/${modelId}`;
        const modelData = await get(url);
        dispatchModelDataSuccess(dispatch, modelData);
    } catch (e) {
        props.history.push(`/app/newModel`)
        dispatch(fetchingModelDataError(e));

    }
};


export default function ModelReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_MODEL_DATA: {
          return {
                ...state,
                model: action.payload
            }
        };
        case FETCHING_MODEL_METRICS: {
          return {
                ...state,
                metrics: action.payload
            }
        };
        case FETCHING_MODEL_ERROR: {
          return {
                ...state,
                error: true
            }
        };
        default:
            return state;
    }
}
