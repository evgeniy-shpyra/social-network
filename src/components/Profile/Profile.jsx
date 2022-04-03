import styles from "./Profile.module.css"
import MyPostsContainer from './MyPost/MyPostContainer';
import ProfileInfo from "./ProfileInfo.jsx/ProfileInfo";



const Profile = (props) => {
    
    return (
        <div className={styles.body}>
            <ProfileInfo profile={props.profile} editProfileStatus={props.editProfileStatus} profileStatus={props.profileStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile

