import s from "./Sidebar.module.css";

import { Routes, Route, Link, NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.body}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <NavLink to="/posts" className = { navData => navData.isActive ? s.active : s.item}>Posts</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/massages" className = {navData => navData.isActive ? s.active : s.item}>Massages</NavLink>
                    </li>
                    <li className={s.item}>Line</li>
                    <li className={s.item}>Line</li>
                </ul>
            </nav>
            
        </aside>

    );
};

export default Sidebar;