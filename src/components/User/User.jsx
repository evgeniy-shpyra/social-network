import s from "./User.module.css";

const User = () => {
    return (
        <div className={s.user}>
            <div className={s.body}>
                <div className={s.avatar}></div>
                <div className={s.name}>Name</div>
                <div className={s.surename}>Second Name</div>
                <div className={s.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, vero.</div>
                <div className={s.info}>
                    <div className={s.susubscribers}>subscribers</div>
                    <div className={s.subscriptions}>subscriptions</div>
                </div>
            </div>
        </div>
    );
}

export default User;