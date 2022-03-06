import { updateNewPostAction, addPostAction } from "../../../Redux/postReducer";
import CreatePost from "./CreatePost";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        postText: state.postPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostAction())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostAction(text))
        }
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)


export default CreatePostContainer;