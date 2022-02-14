import s from "./Person.module.css";
import { NavLink } from 'react-router-dom';

const Person = (props) => {
    return (
        <NavLink to={`/massages/${props.id}/`}>
            <div className={s.body}>
                <div className={s.avatar}></div>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.text}</div>
            </div>
        </NavLink>
    );
}

export default Person;