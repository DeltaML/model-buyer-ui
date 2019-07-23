import {compose, withHandlers, withState} from "recompose";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import ModelView from "./Model";

export default compose(
    connect(
        state => ({
            isLoading: state.model.isLoading,
        })
    ),
  withState("mainChartState", "setMainChartState", "monthly"),
    withRouter
)(ModelView);
