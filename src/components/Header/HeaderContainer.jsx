import { connect } from 'react-redux';
import React from 'react';
import Header from './Header';
import { getAuthUserData } from './../../Redux/authReduser';
import { useMatch } from 'react-router-dom';
import { compose } from 'redux';



class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props} />
    }
}

const HeaderMatch = (props) => {
    let menuItem = useMatch('/*').params.item
    if (menuItem)
        menuItem = menuItem[0].toUpperCase() + menuItem.slice(1)
    return (
        <HeaderAPIContainer {...props} activeItemMenu={menuItem} />
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default compose(
    connect(mapStateToProps, { getAuthUserData }),
)(HeaderMatch)