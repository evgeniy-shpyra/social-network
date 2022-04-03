import { connect } from 'react-redux';
import Massages from './Massages';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
    }    
}

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(Massages)
