import s from "./CreatePost.module.css";

const CreatePost = (props) => {
    
    let onAddNewPost = () => {
        props.addNewPost()
    }
    let onUpdateNewPostText = (e) => {
        props.updateNewPostText(e.target.value)
    }

    return (
        <div className={s.body}>
            <div className={s.lable}>New Post</div>
            <form className={s.form}>
                <textarea onChange={onUpdateNewPostText} 
                    className={s.post}
                    value={props.postText} 
                    resize="none">
                </textarea>
                <button type="button" onClick={onAddNewPost} className={s.button}></button>
            </form>
        </div>
    );
};

export default CreatePost;