import Message from "./Message/Message";
import { addMessageAction, updateNewMassageAction } from '../../../Redux/messageReducer';
import Conversation from "./Conversation";

const ConversationContainer = (props) => {
    
    let state = props.store.getState().messagePage
    let messageElements = state.messages.map(m => <Message isMyMessage={m.isMyMessage} time={m.time} text={m.text} />)
    
    const updateMessageText = (text) => {
        props.store.dispatch(updateNewMassageAction(text))
    }
    const sendMessage = () => {
        props.store.dispatch(addMessageAction())
    }
    
    return (
        <Conversation
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
            messageElements={messageElements}
            messageText={state.newMessageText.text} />
    );
}

export default ConversationContainer;