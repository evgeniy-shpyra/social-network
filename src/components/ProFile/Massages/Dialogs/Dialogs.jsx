import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";



const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <Dialog id={d.id} name={d.name} />);

    return (
        <div className={s.body}>
            <div className={s.searchDialog}>
                <input type="text" className={s.input} />
                <button className={s.button}>Search</button>
            </div>
            {dialogsElements}
        </div>
    );
}

export default Dialogs;