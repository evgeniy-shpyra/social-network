import React from 'react';
import { addPost, updateNewPostText } from '../../../Redux/postReducer';
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

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPostsAPIContainer)

export default MyPostsContainer