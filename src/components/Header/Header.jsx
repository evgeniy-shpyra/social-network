import styles from "./Header.module.css";
import defaultUserPhoto from './../../assets/images/user-icon.jpg'
import { NavLink } from "react-router-dom";

const Header = (props) => {


  return (
    <header className={styles.container}>
      <div className={styles.body}>
        <div className={styles.logo}>
          <div className={styles.logoLable}>
            <div className={styles.cube}></div>
            <div className={styles.cube}></div>
            <div className={styles.cube}></div>
            <div className={styles.cube}></div>
          </div>
          <div className={styles.logoText}>{props.activeItemMenu}</div>
        </div>
        {props.auth.isAuth ?
          <div className={styles.info}>
            <button onClick={props.logout} className={styles.logoutBtn}>logout</button>
            <img className={styles.avatar} src={defaultUserPhoto} alt="" />
            <div className={styles.profileInfo}>
              <div className={styles.name}>{props.auth.login}</div>
              <div className={styles.email}>{props.auth.email}</div>
            </div>
          </div>
          : <NavLink className={styles.logoutBtn} to={'/login'}>Login</NavLink>
        }

      </div>
    </header >
  );
}

export default Header;