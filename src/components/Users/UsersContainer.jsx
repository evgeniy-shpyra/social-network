import { connect } from 'react-redux';
import { followingProcess } from '../../Redux/usersReducer';
import React from 'react';
import Users from './Users'
import userPhoto from "./../../assets/images/user-icon.jpg"
import Preloader from '../common/Preloader/Preloader';
import { getUsers } from './../../Redux/usersReducer';
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';



class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChangedForward = () => {
        this.props.getUsers(this.props.currentPage + 1, this.props.pageSize)
    }

    onPageChangedBack = () => {
        this.props.getUsers(this.props.currentPage - 1, this.props.pageSize)
    }

    render() {
        debugger
        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                userPhoto={userPhoto}
                followingProcess={this.props.followingProcess}
                onPageChangedForward={this.onPageChangedForward}
                onPageChangedBack={this.onPageChangedBack}
                onToggleFollowed={this.onToggleFollowed}
                followingInProcess={this.props.followingInProcess}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.toggleIsFetching,
        followingInProcess: state.usersPage.followingInProcess
    }
}

export default compose(
    connect(mapStateToProps, { getUsers, followingProcess }),
    withAuthRedirect
)(UsersAPIContainer);
