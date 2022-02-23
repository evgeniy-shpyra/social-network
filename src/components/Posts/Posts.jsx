import s from "./Posts.module.css";
import Post from './Post/Post';
import CreatePostContainer from './CreatePost/CreatePostContainer';

const Posts = (props) => {

    let state = props.store.getState().postPage

    let postsElements = state.posts.map(p => <Post name={p.name} text={p.text} />)

    return (
        <div className={s.body}>
            <CreatePostContainer store={props.store} />
            {postsElements}
        </div>
    );
}

export default Posts;