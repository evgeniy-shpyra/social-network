import { NavLink } from 'react-router-dom';
import s from "./Sidebar.module.css";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { withBlockNavLinkWithoutAuth } from './../../hoc/withBlockedLinkWithoutAuth';

const Sidebar = (props) => {



    return (
        <aside className={s.container}>
            <nav>
                <ul className={s.list}>
                    {props.ItemMenu.map(i =>
                        <li key={i.id} >
                            <NavLink to={i.body.toLowerCase()}
                                className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item} onclick={() => false}>
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