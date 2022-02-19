import s from "./Posts.module.css";
import CreatePost from "./CreatePost/CreatePost";
import Post from './Post/Post';

const Posts = (props) => {

    let postsElements = props.postsPage.posts.map(p => <Post name={p.name} text={p.text}/>)

    return (
        <div className={s.body}>
            <CreatePost dispatch={props.dispatch} newPostText={props.postsPage.newPostText} />
            {postsElements}
        </div>
    );
}

export default Posts;