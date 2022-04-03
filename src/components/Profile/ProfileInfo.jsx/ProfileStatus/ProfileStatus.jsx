import React from 'react';
import styles from "./ProfileStatus.module.css"


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    onEditStatus = (e) => {
        this.props.editProfileStatus(e.target.value)
    }

    render() {
        return (
            <div className={styles.body}>
                {!this.state.editMode &&
                    <div className={styles.status} onDoubleClick={this.activeEditMode}>{this.props.status}</div>
                }
                {this.state.editMode &&
                    <div className={styles.edit}>
                        <input className={styles.input} onChange={this.onEditStatus} autoFocus={true} onBlur={this.deactiveEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus