import { useEffect, useState } from "react"
import styles from "./ProfileStatus.module.css"


const ProfileStatusHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, editStatus] = useState(props.status)

    useEffect(() => {
        editStatus(props.status)  
    }, [props.status])

    const activeEditMode = () => setEditMode(true)

    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e) => {
        editStatus(e.target.value)
    }

    return (
        <div className={styles.body}>
            {!editMode ?
                <div className={styles.status} onDoubleClick={activeEditMode}>{props.status || 'add status'}</div>
                :
                <div className={styles.edit}>
                    <input className={styles.input} 
                    onChange={onChangeStatus} 
                    onBlur={deactiveEditMode} 
                    value={status}
                    autoFocus={true} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusHook