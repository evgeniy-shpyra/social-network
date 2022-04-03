import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getProfile, editProfileStatus } from './../../Redux/profileReducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match ? this.props.match.params.userId : null)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId/")

    return (
        <ProfileAPIContainer {...props} match={match} />
    )
}

let mapStateToProps = (state) => {
    return {
        myIP: state.auth.userId,
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, editProfileStatus }),
    withAuthRedirect,
)(ProfileMatch)

