import {compose, lifecycle, withHandlers, withState} from "recompose";

import ModelView from "./Model";
import {connect} from "react-redux";
import {createModel} from "../model/ModelState";


export default compose(
    connect(
        state => ({
            modelTypes: state.model.modelTypes,
            model: state.model.model,
            error: state.model.error
        }),
        {createModel}
    )
)(ModelView);
