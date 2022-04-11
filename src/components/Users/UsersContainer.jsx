import { connect } from 'react-redux';
import { followingProcess } from '../../Redux/usersReducer';
import React from 'react';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { requestUsers } from './../../Redux/usersReducer';
import { compose } from 'redux';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProcess, getUsersSuperSelector } from './../../Redux/userSelectors';



class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChangedForward = () => {
        this.props.requestUsers(this.props.currentPage + 1, this.props.pageSize)
    }

    onPageChangedBack = () => {
        this.props.requestUsers(this.props.currentPage - 1, this.props.pageSize)
    }

    render() {
        if (this.props.isFetching)
            return <Preloader />
        return (
            <Users {...this.props}
                onPageChangedBack={this.onPageChangedBack}
                onToggleFollowed={this.onToggleFollowed}
                onPageChangedForward={this.onPageChangedForward}
            />
        )

    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state),
    }
}

export default compose(
    connect(mapStateToProps, { requestUsers, followingProcess })
)(UsersAPIContainer);
