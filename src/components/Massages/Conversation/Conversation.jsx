import s from "./Conversation.module.css";
import Message from "./Message/Message";

const Conversation = (props) => {

    let messageElements = props.messages.map(m => <Message isMyMessage={m.isMyMessage} time={m.time} text={m.text} />)

    const onUpdateMessageText = (e) => {
        props.updateMessageText(e.target.value)
    }
    const onSendMessage = () => {
        props.sendMessage()
    }

    return (
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.name}>Dima</div>
            </div>
            <div className={s.body}>
                <div className={s.massages}>
                    {props.messageElements}
                </div>
            </div>
            <div className={s.input}>
                <textarea onChange={onUpdateMessageText} placeholder="Write your massage!" value={props.messageText} className={s.inputMassage}></textarea>
                <button onClick={onSendMessage} className={s.button}>Send</button>
            </div>
        </div>
    );
}

export default Conversation;