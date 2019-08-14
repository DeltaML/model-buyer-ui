import {compose, withHandlers, withState, lifecycle} from "recompose";
import {connect} from "react-redux";
import ModelView from "./Model";
import {fetchingModelData} from "./ModelState";


export default compose(
    connect(
        state => ({
            isLoading: state.model.isLoading,
            model: state.model.model,
            metrics: state.model.metrics
        }),
        {fetchingModelData}
    ),
  withState("mainChartState", "setMainChartState", "monthly"),
    lifecycle({
    componentWillMount() {
      this.props.fetchingModelData(this.props)
    }
  })
)(ModelView);
