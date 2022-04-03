import styles from "./Massages.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";
import ConversationContainer from "./Conversation/ConversationContainer";


const Massages = (props) => {
    
    return (
        <div className={styles.body}>
            <DialogsContainer />
            <ConversationContainer />
        </div>
    );
}

export default Massages;