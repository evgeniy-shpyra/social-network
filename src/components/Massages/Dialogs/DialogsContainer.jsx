import Dialogs from "./Dialogs";
import Dialog from "./Dialog/Dialog";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        dialogsElements: state.messagePage.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name} />)
    }
}



const DialogsContainer = connect(mapStateToProps, {})(Dialogs)

export default DialogsContainer;