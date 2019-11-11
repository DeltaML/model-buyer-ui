import {compose, withHandlers} from "recompose";
import {withRouter} from "react-router-dom";
import NewModelView from "./NewModel";
import {connect} from "react-redux";
import {createModel, selectModelType,setInputValues, uploadFile} from "../newModel/NewModelState";



export default compose(
    connect(
        state => ({
            modelName: state.newModel.name,
            selectedModelType: state.newModel.selectedModelType,
            target: state.newModel.target,
            features: state.newModel.features,
            modelTypes: state.newModel.modelTypes,
            model: state.newModel.model,
            error: state.newModel.error,
            file: state.newModel.file,
            fileName: state.newModel.fileName,
            modelFeatures: state.newModel.modelFeatures,
            payment_requirements: state.newModel.payment_requirements,
            hyperparameter: state.newModel.hyperparameter
        }),
        {selectModelType, createModel, setInputValues, uploadFile}
    ),
    withRouter,
    withHandlers({
        handleInput: props => (input, field, event) => {
            props.setInputValues(input, field, event.target.value);
        },
        handleCSVInput: props => (input, field, event) => {
            props.setInputValues(input, field, event.target.value.split(","));
        },
        handleCreateModel: props => () => {
            props.createModel(props, props.modelName, props.selectedModelType, props.target, props.payment_requirements, props.modelFeatures);
        },
        handleSelect: props => (event) => {
            props.selectModelType(event.target.value)
        },
        handleUploadFile: props => (event) => {
            props.uploadFile(event.target.files)
        }
    }),

)(NewModelView);
