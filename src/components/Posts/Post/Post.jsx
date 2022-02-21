import s from "./Post.module.css";


const Post = (props) => {
    return (
        <section className={s.post}>
            <div className={s.body}>
                <div className={s.info}>
                    <div className={s.avatar}></div>
                    <div className={s.name}>{props.name}</div>
                </div>
                <div className={s.text}>{props.text}</div>
            </div>
        </section>
    );
}

export default Post;