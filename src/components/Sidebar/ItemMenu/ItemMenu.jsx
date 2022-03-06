import s from "./ItemMenu.module.css";
import { NavLink } from 'react-router-dom';




const ItemMenu = (props) => {
    
    const updateActiveItemMenu = () => {   
        props.updateActiveItemMenu(props.body)
    }

    return (
        <li>
            <NavLink onClick={updateActiveItemMenu} to={props.body.toLowerCase()} className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>
                {props.body}
            </NavLink>
        </li>
    );
};

export default ItemMenu;