import {get} from "../../utils/apiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    modelTypes: ["LINEAR_REGRESSION"]
};


export const CREATE_MODEL_PENDING = "Model/CREATE_MODEL_PENDING";
export const CREATE_MODEL_SUCCESS = "Home/CREATE_MODEL_SUCCESS";
export const CREATE_MODEL_ERROR = "Home/CREATE_MODEL_ERROR";

export const createModelPending = () => ({
    type: CREATE_MODEL_PENDING
});

export const createModelSuccess = (model) => ({
    type: CREATE_MODEL_SUCCESS,
    payload: model
});

export const createModelError = (error) => ({
    type: CREATE_MODEL_ERROR,
    error: error
});


export const createModel = () => async dispatch => {
    console.log("Create Model");
}


export default function ModelReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_MODEL_PENDING:
            return {
                ...state,
                isLoading: true,
                error: null,
                model: null
            };
        case CREATE_MODEL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                model: action.payload
            };
        case CREATE_MODEL_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                model: null
            };
        default:
            return state;
    }
}
