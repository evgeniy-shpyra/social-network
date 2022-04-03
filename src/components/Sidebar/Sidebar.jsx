import { NavLink } from 'react-router-dom';
import s from "./Sidebar.module.css";

const Sidebar = (props) => {

    const updateActiveItemMenu = (body) => {
        props.updateActiveItemMenu(body)
    }

    return (
        <aside className={s.container}>
            <nav>
                <ul className={s.list}>
                    {props.ItemMenu.map(i =>
                        <li key={i.id} >
                            <NavLink onClick={() => updateActiveItemMenu(i.body)} to={i.body.toLowerCase()} className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>
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