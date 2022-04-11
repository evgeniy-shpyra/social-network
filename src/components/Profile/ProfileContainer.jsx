import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getProfile, getStatus, updateStatus, setOwnerProfile } from './../../Redux/profileReducer';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';



class ProfileAPIContainer extends React.Component {

    componentDidMount() {

        this.props.match ? this.props.setOwnerProfile(false) : this.props.setOwnerProfile(true)
        let currentIP = this.props.match ? this.props.match.params.userId : this.props.myIP

        this.props.getProfile(currentIP)
        this.props.getStatus(currentIP)
    }

    render() {
        if (this.props.isFetching)
            return <Preloader isFullScreen={false} />
        return <Profile {...this.props} />
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
        profileStatus: state.profilePage.profileStatus,
        isMyProfile: state.profilePage.isMyProfile,
        isFetching: state.profilePage.isFetching,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, setOwnerProfile }),
)(ProfileMatch)

