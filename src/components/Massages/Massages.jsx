import s from "./Massages.module.css";
import Dialogs from "./Dialogs/Dialogs";
import Conversation from './Conversation/Conversation';


const Massages = (props) => {
    
    return (
        <div className={s.body}>
            <Dialogs dialogs={props.messagesPage.dialogs} />
            <Conversation 
                massages={props.messagesPage.messages} 
                dispatch={props.dispatch} 
                newMessageText={props.messagesPage.newMessageText}
            />
        </div>
    );
}

export default Massages;