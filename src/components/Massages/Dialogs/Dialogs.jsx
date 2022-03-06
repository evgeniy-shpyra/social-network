
import s from "./Dialogs.module.css";


const Dialogs = (props) => {
    
    return (
        <div className={s.body}>
            <div className={s.searchDialog}>
                <input type="text" className={s.input} />
                <button className={s.button}>Search</button>
            </div>
            {props.dialogsElements}
        </div>
    );
}

export default Dialogs;