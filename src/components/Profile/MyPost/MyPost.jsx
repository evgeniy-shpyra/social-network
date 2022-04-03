import styles from './MyPost.module.css'
import Post from './Post/Post'

const MyPost = (props) => {
    return (
        <div>
            <div className={styles.form}>
                <textarea onChange={(e) => props.updateNewPostText(e.target.value)}
                    className={styles.textarea}
                    value={props.newPostText}
                    resize="none"
                    placeholder='Create new post!'>
                </textarea>
                <button type={styles.addPostBtn} onClick={props.addPost} className={styles.button}></button>
            </div>
            {props.posts.map(p => <Post key={p.id} body={p.body} author={p.author} />)}
        </div>
    )

}

export default MyPost