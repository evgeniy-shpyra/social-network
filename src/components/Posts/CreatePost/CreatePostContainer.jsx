import { updateNewPostAction, addPost } from "../../../Redux/postReducer";
import CreatePost from "./CreatePost";

const CreatePostContainer = (props) => {
     
    let state = props.store.getState().postPage

    let addNewPost = () => {
        props.store.dispatch(addPost())
    }
    
    let updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostAction(text))
    }

    return (
        <CreatePost addNewPost={addNewPost} updateNewPostText={updateNewPostText} postText={state.newPostText.text} />
    );
};

export default CreatePostContainer;