import s from "./Posts.module.css";

import CreatePostContainer from './CreatePost/CreatePostContainer';

const Posts = (props) => {
    return (
        <div className={s.body}>
            <CreatePostContainer />
            <div className={s.posts}>
                {props.postsElements}
            </div>
        </div>
    );
}

export default Posts;