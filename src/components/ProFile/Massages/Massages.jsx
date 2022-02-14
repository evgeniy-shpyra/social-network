import s from "./Massages.module.css";
import Dialog from "./Dialog/Dialog";
import Person from './Person/Person';


const Massages = (props) => {
    
    let dialogsElements = props.dialogs.map(d => <Dialog message={d.message} time={d.time} />);
    let personsElements = props.persons.map( p => <Person id={p.id} name={p.name}/>);
    debugger;

    return (
        <div className={s.body}>
            <div className={s.person}>
                {personsElements}
            </div>
            <div className={s.massages}>
                {dialogsElements}
            </div>
        </div>
    );
}

export default Massages;