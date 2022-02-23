import Dialogs from "./Dialogs";
import Dialog from "./Dialog/Dialog";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage
    let dialogsElements = state.dialogs.map(d => <Dialog id={d.id} name={d.name} />);

    return (
        <Dialogs dialogsElements={dialogsElements} />
    );
}

export default DialogsContainer;