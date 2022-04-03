import styles from "./Post.module.css";

const Post = (props) => {
    
    return (
        <section className={styles.post}>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.avatar}></div>
                    <div className={styles.name}>{props.author}</div>
                </div>
                <div className={styles.text}>{props.body}</div>
            </div>
        </section>
    );
}

export default Post;