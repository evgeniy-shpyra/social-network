import Profile from './Profile';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        name: state.profilePage.profiles[0].name,
        rating: state.profilePage.profiles[0].rating
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);


export default ProfileContainer;
