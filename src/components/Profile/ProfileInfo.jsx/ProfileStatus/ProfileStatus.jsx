import React from 'react';
import styles from "./ProfileStatus.module.css"


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.status !== prevState.status){
            this.setState({
                status: this.state.status
            })
        }
    }

    render() {
        
        return (
            <div className={styles.body}>
                {!this.state.editMode &&
                    <div className={styles.status} onDoubleClick={this.props.isMyProfile && this.activeEditMode}>{this.props.status || 'add status'}</div>
                }
                {this.state.editMode &&
                    <div className={styles.edit}>
                        <input className={styles.input} autoFocus={true}
                        onBlur={this.deactiveEditMode} value={this.state.status} onChange={this.onChangeStatus} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus