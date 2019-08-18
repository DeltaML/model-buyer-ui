import {compose, withHandlers, withState} from 'recompose';
import { withRouter } from 'react-router-dom';

import HomeWidgetView from './HomeWidgetView';

export default compose(
    withState('moreButtonRef', 'setMoreButtonRef', null),
    withState('isMoreMenuOpen', 'setMoreMenuOpen', false),
    withRouter,
    withHandlers({
        editModel: props => (link) => {
            console.log(link)
            props.history.push(link)
        },
        deleteModel: props => (link) => {
            console.log(link)
        }
    })
)(HomeWidgetView);