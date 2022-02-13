import s from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.body}>
                <ul className={s.list}>
                    <li className={s.item}>Posts
                        <a href="/posts">Posts</a>
                        </li>
                    <li className={s.item}>
                        <a href="/massages">Massages</a>
                        </li>
                    <li className={s.item}>Line</li>
                    <li className={s.item}>Line</li>
                </ul>
            </nav>
        </aside >
    );
};

export default Sidebar;