import s from "./Conversation.module.css";
import Message from "./Message/Message";
import SendMessageContainer from "./SendMessage/SendMessageContainer";

const Conversation = (props) => {

    let messageElements = props.messages.map(m => <Message isMyMessage={m.isMyMessage} time={m.time} text={m.text} />)

    const onUpdateMessageText = (e) => {
        props.updateMessageText(e.target.value)
    }
    const onAddMessage = () => {
        props.addMessage()
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
                <SendMessageContainer />
            </div>
        </div>
    );
}

export default Conversation;