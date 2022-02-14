
import s from "./Dialog.module.css";

const Dialog = (props) => {
    return (
        <div className={s.body}>
           <div className={s.avatar}></div>
           <div className={s.text}>{props.message}</div>
           <div className={s.time}>{props.time}</div>
        </div>
    );
}

export default Dialog;