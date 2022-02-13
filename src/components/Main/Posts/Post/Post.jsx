import s from "./Post.module.css";


const Post = (props) => {
    debugger;
    return (
        <section className={s.post}>
            <div className={s.body}>
                <div className={s.info}>
                    <div className={s.avatar}></div>
                    <div className={s.name}>{props.name}</div>
                </div>
                <div className={s.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero reprehenderit nobis eligendi eaque. Exercitationem possimus provident fugit eius omnis obcaecati ad distinctio unde hic atque. Dignissimos pariatur illo veniam velit. </div>
            </div>
        </section>
    );
}

export default Post;