import Preloader from "../../common/Preloader/Preloader"
import styles from "./ProfileInfo.module.css"
import defaultUserPhoto from "./../../../assets/images/user-icon.jpg"
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const ProfileInfo = (props) => {
    
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.info}>
                <img src={props.profile.photos.large ? props.profile.photos.large : defaultUserPhoto} className={styles.avatar}></img>
                <div>
                    <div className={styles.name}>{props.profile.fullName}</div>
                    <div className={styles.aboutMe}>{props.profile.aboutMe}</div>
                </div>
            </div>
            <div>
                <ProfileStatus status={props.profileStatus} editProfileStatus={props.editProfileStatus} />
                <div className={styles.text}>
                    {props.profile.lookingForAJob ? "I'm looking for a job" : "I'm not looking for a job"}
                </div>
                <div className={styles.text}>
                    {props.profile.lookingForAJob && props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div> 
    )
}

export default ProfileInfo

