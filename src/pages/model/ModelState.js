import dataRequirements from "./mock"
import {executeRequest} from "../../utils/ApiUtilities";

export const initialState = {
    isLoading: false,
    error: null,
    modelTypes: ["LINEAR_REGRESSION"],
    features: dataRequirements.dataRequirements.features,
    target: dataRequirements.dataRequirements.target,
    selectModelType: "",
    model: null,
    fileName: "",
    file: null

};


export const SELECT_MODEL_TYPE = "Model/SELECT_MODEL_TYPE";
export const CREATE_MODEL_PENDING = "Model/CREATE_MODEL_PENDING";
export const CREATE_MODEL_SUCCESS = "Model/CREATE_MODEL_SUCCESS";
export const CREATE_MODEL_ERROR = "Model/CREATE_MODEL_ERROR";
export const SELECT_DATA_REQUIREMENTS_FEATURES_LIST = "Model/SELECT_DATA_REQUIREMENTS_FEATURES_LIST";
export const SELECT_DATA_REQUIREMENTS_FEATURES_RANGE = "Model/SELECT_DATA_REQUIREMENTS_FEATURES_RANGE";
export const SELECT_DATA_REQUIREMENTS_FEATURES_PRE_PROCESSING = "Model/SELECT_DATA_REQUIREMENTS_FEATURES_PRE_PROCESSING";
export const SELECT_DATA_REQUIREMENTS_FEATURES_DESC = "Model/SELECT_DATA_REQUIREMENTS_FEATURES_DESC";
export const SELECT_DATA_REQUIREMENTS_TARGET_RANGE = "Model/SELECT_DATA_REQUIREMENTS_TARGET_RANGE";
export const SELECT_DATA_REQUIREMENTS_TARGET_DESC = "Model/SELECT_DATA_REQUIREMENTS_TARGET_DESC";
export const LOAD_FILE = "Model/LOAD_FILE";
export const LOAD_FILE_NAME = "Model/LOAD_FILE_NAME";

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

export const updateFile = (file) => ({
    type: LOAD_FILE,
    payload: file
});

export const updateFileName = (fileName) => ({
    type: LOAD_FILE_NAME,
    payload: fileName
});

export const uploadFile = (files) => dispatch => {
    let file = files[0];
    if (file) {
        console.log(file)
        dispatch(updateFileName(file.name))
        dispatch(updateFile(file))
    }
}

export const selectModelTypeSuccess = (modelType) => ({
    type: SELECT_MODEL_TYPE,
    payload: modelType
});

const DISPATCH_REDUCE_TYPE_MAP = {
    'features': {
        'list': SELECT_DATA_REQUIREMENTS_FEATURES_LIST,
        'range': SELECT_DATA_REQUIREMENTS_FEATURES_RANGE,
        'pre_processing': SELECT_DATA_REQUIREMENTS_FEATURES_PRE_PROCESSING,
        'desc': SELECT_DATA_REQUIREMENTS_FEATURES_DESC,
    },
    'target': {
        'range': SELECT_DATA_REQUIREMENTS_TARGET_RANGE,
        'desc': SELECT_DATA_REQUIREMENTS_TARGET_DESC,
    }
};


export const updateInputSuccess = (type, value) => ({
    type: type,
    payload: value
});

const buildDataRequirements = (features, target) => {
    return JSON.stringify({features: features, target: target});
}

export const createModel = (file, selectedModelType, features, target) => async dispatch => {
    console.log("Create Model");
    try {
        const data = new FormData();
        data.append('model_type', selectedModelType);
        data.append('testing_file', file);
        data.append("data_requirements", buildDataRequirements(features, target))
        const modelCreateResponse = await executeRequest("POST", "models", data);
        dispatch(createModelSuccess());
    } catch (e) {
        dispatch(createModelError());
    }


}


export const selectModelType = (selectedModelType) => dispatch => {
    dispatch(selectModelTypeSuccess(selectedModelType))
};

export const setInputValues = (input, field, value) => dispatch => {
    dispatch(updateInputSuccess(DISPATCH_REDUCE_TYPE_MAP[input][field], value))

};


export default function ModelReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_FILE:
            return {
                ...state,
                file: action.payload
            };
        case LOAD_FILE_NAME:
            return {
                ...state,
                fileName: action.payload
            };
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
        case SELECT_MODEL_TYPE:
            return {
                ...state,
                selectedModelType: action.payload
            };
        case SELECT_DATA_REQUIREMENTS_FEATURES_LIST:
            return {
                ...state,
                features: {
                    ...state.features,
                    list: action.payload
                }
            };
        case SELECT_DATA_REQUIREMENTS_FEATURES_DESC:
            return {
                ...state,
                features: {
                    ...state.features,
                    desc: action.payload
                }
            };
        case SELECT_DATA_REQUIREMENTS_FEATURES_RANGE:
            return {
                ...state,
                features: {
                    ...state.features,
                    range: action.payload
                }
            };
        case SELECT_DATA_REQUIREMENTS_FEATURES_PRE_PROCESSING:
            return {
                ...state,
                features: {
                    ...state.features,
                    pre_processing: action.payload
                }
            };
        case SELECT_DATA_REQUIREMENTS_TARGET_RANGE:
            return {
                ...state,
                target: {
                    ...state.target,
                    range: action.payload
                }
            };
        case SELECT_DATA_REQUIREMENTS_TARGET_DESC:
            return {
                ...state,
                target: {
                    ...state.target,
                    desc: action.payload
                }


            };
        default:
            return state;
    }
}
