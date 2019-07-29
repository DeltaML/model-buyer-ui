import {get} from "../../utils/ApiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    data: null

};


export const FETCHING_MODEL_PENDING = "Home/FETCHING_MODEL_PENDING";
export const FETCHING_MODEL_SUCCESS = "Home/FETCHING_MODEL_SUCCESS";
export const FETCHING_MODEL_ERROR = "Home/FETCHING_MODEL_ERROR";

export const fetchingModelDataPending = () => ({
    type: FETCHING_MODEL_PENDING
});

export const fetchingModelDataSuccess = (model) => ({
    type: FETCHING_MODEL_SUCCESS,
    payload: model
});

export const fetchingModelDataError = (error) => ({
    type: FETCHING_MODEL_ERROR,
    error: error
});

export const fetchingModelData = (props) => async dispatch => {

    dispatch(fetchingModelDataPending());

    try {

        const modelId = props.location.pathname.split("/").pop()
        const url = `models/${modelId}`;
        const modelData = await get(url);
        dispatch(fetchingModelDataSuccess(modelData));
    } catch (e) {
        props.history.push(`/app/newModel`)
        dispatch(fetchingModelDataError(e));

    }
};


export default function ModelReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_MODEL_SUCCESS:
            return {
                ...state,
                model: {
                    ...state.model,
                    status: action.payload.status,
                    id: action.payload.id,
                }
            };
        default:
            return state;
    }
}
