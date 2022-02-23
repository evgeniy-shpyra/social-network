import s from "./Sidebar.module.css";

import ItemMenu from "./ItemMenu/ItemMenu";

const Sidebar = (props) => {
    
    let state = props.store.getState().menu
    let itemsMenuElements = state.menuItems.map( i => <ItemMenu body={i.body} dispatch={props.store.dispatch} />)
    
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