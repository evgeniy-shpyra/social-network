import s from "./Dialog.module.css";
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

    return (
        <NavLink to={`/massages/${props.id}/`} className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>
            <div className={s.body}>
                <div className={s.avatar}></div>
                <div className={s.info}>
                    <div className={s.name}>{props.name}</div>
                </div>
            </div>
        </NavLink>
    );
}

export default Dialog;