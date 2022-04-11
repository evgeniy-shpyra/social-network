import styles from './MyPost.module.css'
import CreatePostContainer from './CreatePost/CreatePostContainer'
import Post from './Posts/Post'

const MyPost = (props) => {
    return (
        <div>
            <div className={styles.form}>
                <CreatePostContainer />
                <button type={styles.addPostBtn} onClick={props.addPost} className={styles.button}></button>
            </div>
            {props.posts.map(p => <Post key={p.id} body={p.body} author={p.author} />)}
        </div>
    )

}

export default MyPost