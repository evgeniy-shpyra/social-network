import s from "./Sidebar.module.css";

import { NavLink } from 'react-router-dom';
import ItemMenu from "./ItemMenu/ItemMenu";

const Sidebar = (props) => {
    
    let itemsMenuElements = props.menu.menuItems.map( i => <ItemMenu body={i.body} dispatch={props.dispatch} />)

    return (
        <aside className={s.container}> 
            <nav className={s.body}> 
                <ul className={s.list}> 
                    {itemsMenuElements} 
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;