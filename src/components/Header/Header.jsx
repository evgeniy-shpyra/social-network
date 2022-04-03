import s from "./Header.module.css";
import defaultUserPhoto from './../../assets/images/user-icon.jpg'

const Header = (props) => {

  
  return (
    <header className={s.container}>
      <div className={s.body}>
        <div className={s.logo}>
          <div className={s.logoLable}>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
          </div>
          <div className={s.logoText}>{props.activeItemMenu}</div>
        </div>
        {props.auth.isAuth ?
          <div className={s.info}>

            <img className={s.avatar} src={props.auth.urlAvatar ? props.auth.urlAvatar : defaultUserPhoto} alt="" />

            <div className={s.profileInfo}>
              <div className={s.name}>{props.auth.login}</div>
              <div className={s.email}>{props.auth.email}</div>
            </div>
          </div>
          : <button onClick={props.getAuthUserData}>Login</button>
        }

      </div>
    </header >
  );
}

export default Header;