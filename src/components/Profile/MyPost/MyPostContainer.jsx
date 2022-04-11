import React from 'react';
import { connect } from 'react-redux';
import MyPost from './MyPost';


class MyPostsAPIContainer extends React.Component {
    render() {
        return (
            <MyPost {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newPostText: state.postPage.newPostText,
        posts: state.postPage.posts,
    }
    
}

const MyPostsContainer = connect(mapStateToProps, {})(MyPostsAPIContainer)

export default MyPostsContainer