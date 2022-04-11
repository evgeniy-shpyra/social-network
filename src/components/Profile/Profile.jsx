import styles from "./Profile.module.css"
import MyPostsContainer from './MyPost/MyPostContainer';
import ProfileInfo from "./ProfileInfo.jsx/ProfileInfo";



const Profile = (props) => {
    
    return (
        <div className={styles.body}>

            <ProfileInfo profile={props.profile} isFetching={props.isFetching} 
            profileStatus={props.profileStatus} updateStatus={props.updateStatus}
            isMyProfile={props.isMyProfile} />

            <MyPostsContainer />
        </div>
    )
}

export default Profile

