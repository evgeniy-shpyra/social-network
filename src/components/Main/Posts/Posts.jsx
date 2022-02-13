import s from "./Posts.module.css";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={s.body}>
            <CreatePost />
            <Post name="Evgeniy" />
            <Post name="Artur" />
            <Post name="Natasha" />
        </div>
    );
}

export default Posts;