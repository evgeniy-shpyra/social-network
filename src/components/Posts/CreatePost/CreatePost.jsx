import s from "./CreatePost.module.css";
import { updateNewPostAction, addPost } from "../../../Redux/store";


const CreatePost = (props) => {

    
    let addNewPost = () => {
        props.dispatch(addPost())
    }
    let updateNewPostText = (e) => {
        props.dispatch(updateNewPostAction(e.target.value))
    }

    return (
        <div className={s.body}>
            <div className={s.lable}>New Post</div>
            <form className={s.form}>
                <textarea onChange={updateNewPostText} 
                    className={s.post}
                    value={props.newPostText.text} 
                    resize="none">
                </textarea>
                <button type="button" onClick={addNewPost} className={s.button}></button>
            </form>
        </div>
    );
};

export default CreatePost;