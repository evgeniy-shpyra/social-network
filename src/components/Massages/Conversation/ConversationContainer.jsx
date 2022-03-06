import Message from "./Message/Message";
import { addMessageAction, updateNewMassageAction } from '../../../Redux/messageReducer';
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

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (body) => {
            dispatch(updateNewMassageAction(body))
        },
        sendMessage: () => {
            dispatch(addMessageAction())
        }
    }
}

const ConversationContainer = connect(mapStateToProps, mapDispatchToProps)(Conversation)


export default ConversationContainer;