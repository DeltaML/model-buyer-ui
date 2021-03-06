import {compose, lifecycle, withState} from "recompose";
import {connect} from "react-redux";
import ModelView from "./Model";
import {fetchingModelData} from "./ModelState";


export default compose(
    connect(
        state => ({
            isLoading: state.model.isLoading,
            model: state.model.model,
            metrics: state.model.metrics,
            chart: state.model.chart
        }),
        {fetchingModelData}
    ),
    withState("mainChartState", "setMainChartState", "monthly"),
    lifecycle({
        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                5000
            );
        },
        componentWillMount() {
            this.props.fetchingModelData(this.props)
        },
        componentWillUnmount() {
            clearInterval(this.timerID);
        },
        tick() {
            this.props.fetchingModelData(this.props)
        }
    })
)(ModelView);
