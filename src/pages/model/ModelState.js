
export const initialState = {
    isLoading: false,
    error: null,

};

export const SELECT_MODEL_TYPE = "NewModel/SELECT_MODEL_TYPE";

export default function NewModelReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_MODEL_TYPE:
            return {
                ...state,
                file: action.payload
            };
        default:
            return state;
    }
}
