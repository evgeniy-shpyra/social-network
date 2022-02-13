import s from "./CreatePost.module.css";

const CreatePost = () => {
    return (
        <div className={s.body}>
            <div className={s.lable}>New Post</div>
            <form className={s.form}>
                <textarea className={s.post} id="newPost" resize="none" name="user_newpost"></textarea>
                <button className={s.button}></button>
            </form>
        </div>
    );
};

export default CreatePost;