import {compose, withHandlers} from "recompose";
import {withRouter} from "react-router-dom";
import ModelView from "./Model";
import {connect} from "react-redux";
import {createModel, selectModelType,setInputValues, uploadFile} from "../model/ModelState";



export default compose(
    connect(
        state => ({
            selectedModelType: state.model.selectedModelType,
            target: state.model.target,
            features: state.model.features,
            modelTypes: state.model.modelTypes,
            model: state.model.model,
            error: state.model.error,
            file: state.model.file,
            fileName: state.model.fileName,
            payment_requirements: state.model.payment_requirements
        }),
        {selectModelType, createModel, setInputValues, uploadFile}
    ),
    withRouter,
    withHandlers({
        handleInput: props => (input, field, event) => {
            props.setInputValues(input, field, event.target.value);
        },
        handleCreateModel: props => () => {
            props.createModel(props.file, props.selectedModelType, props.features, props.target, props.payment_requirements);
        },
        handleSelect: props => (event) => {
            props.selectModelType(event.target.value)
        },
        handleUploadFile: props => (event) => {
            props.uploadFile(event.target.files)
        }
    }),

)(ModelView);
