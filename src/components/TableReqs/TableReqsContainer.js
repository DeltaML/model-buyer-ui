import {compose, withHandlers, withState} from 'recompose';
import {connect} from 'react-redux';

import TableReqs from "./TableReqs";

import {addFeatureRequirement, initialState} from '../../pages/newModel/NewModelState'

export default compose(
    connect(
        state => ({}),
        {addFeatureRequirement},
    ),
    withState('modelFeatures', 'setModelFeatures', initialState.modelFeatures),
    withHandlers({
        addItem: props => event => {
            event.preventDefault();
            let list = props.modelFeatures.concat({name: '', description: '', min: 0, max: 0});
            props.setModelFeatures(list)
            props.addFeatureRequirement(list)
        },
        handleInput: props => (index, e, field) => {

            props.modelFeatures[index][field] = e.target.value;
            props.setModelFeatures(props.modelFeatures)
            props.addFeatureRequirement(props.modelFeatures)

        }
    })
)(TableReqs);