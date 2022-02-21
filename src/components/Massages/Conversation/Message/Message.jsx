import s from "./Message.module.css";

const Message = (props) => {

    return (
        <div className={`${s.container} ${props.isMyMessage ? s.rightMessage : s.leftMessage}`}>
            <div className={`${s.body} ${props.isMyMessage ? s.whiteMessage : s.blackMessage}`}>
                <div className={s.text}>{props.text}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;