import { NavLink } from 'react-router-dom';
import s from "./Sidebar.module.css";

const Sidebar = (props) => {

    const updateActiveItemMenu = () => {
        props.updateActiveItemMenu('posts')
    }

    return (
        <aside className={s.container}>
            <nav>
                <ul className={s.list}>
                    {props.ItemMenu.map(i =>
                        <li id={i.id} >
                            <NavLink onClick={updateActiveItemMenu} to={i.body.toLowerCase()} className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>
                                {i.body}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </aside >
    );
};

export default Sidebar;