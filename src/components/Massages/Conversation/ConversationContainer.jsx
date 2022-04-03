import Message from "./Message/Message";
import { addMessage, updateMessageText } from '../../../Redux/messageReducer';
import Conversation from "./Conversation";
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        messages: state.messagePage.messages,
        messageText: state.messagePage.newMessageText,
        messageElements: 
            state.messagePage.messages.map(m => <Message key={m.id} isMyMessage={m.isMyMessage} time={m.time} text={m.text} />)
        }
    }



const ConversationContainer = connect(mapStateToProps, {updateMessageText, addMessage})(Conversation)


export default ConversationContainer;