import s from "./Sidebar.module.css";

import { Routes, Route, Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.body}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li className={s.item}>
                        <Link to="/massages">Massages</Link>
                    </li>
                    <li className={s.item}>Line</li>
                    <li className={s.item}>Line</li>
                </ul>
            </nav>
            
        </aside>

    );
};

export default Sidebar;