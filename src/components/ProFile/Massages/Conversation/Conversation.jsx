import s from "./Conversation.module.css";
import Message from "./Message/Message";
import { useRef } from 'react';
import { addMessageAction, updateNewMassageAction } from './../../../../Redux/state';

const Conversation = (props) => {

    let messageElements = props.massages.map(m => <Message isMyMessage={m.isMyMessage} time={m.time} text={m.text} />)

    const updateMessageText = (e) => {
        props.dispatch(updateNewMassageAction(e.target.value))
    }
    const sendMessage = () => {
        props.dispatch(addMessageAction())
    }

    return (
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.name}>Dima</div>
            </div>
            <div className={s.body}>
                <div className={s.massages}>
                    {messageElements}
                </div>
            </div>
            <div className={s.input}>
                <textarea onChange={updateMessageText} placeholder="Write your massage!" value={props.newMessageText.text} className={s.inputMassage}></textarea>
                <button onClick={sendMessage} className={s.button}>Send</button>
            </div>
        </div>
    );
}

export default Conversation;