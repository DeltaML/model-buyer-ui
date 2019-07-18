import {compose, lifecycle, withHandlers, withState} from "recompose";

import DashboardView from "./Dashboard";
import {connect} from "react-redux";
import {fetchingHomeData} from "../dashboard/DashboardState";


export default compose(
    connect(
        state => ({
            isLoading: state.dashboard.isLoading,
            models: state.dashboard.models,
            error: state.dashboard.error
        }),
        {fetchingHomeData}
    ),
    withState("mainChartState", "setMainChartState", "monthly"),

  lifecycle({
    componentWillMount() {
      this.props.fetchingHomeData()
    }
  }),
)(DashboardView);
