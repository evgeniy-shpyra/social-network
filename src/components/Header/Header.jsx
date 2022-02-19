import s from "./Header.module.css";

const Header = (props) => {
  debugger
  return (
    <header className={s.container}>
      <div className={s.body}>
        <a href="#" className={s.logo}>
          <div className={s.logoLable}>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
            <div className={s.cube}></div>
          </div>
          <div className={s.logoText}>{props.activeMenu}</div>
        </a>
        <div className={s.info}>
          <div className={s.bell}></div>
          <div className={s.mail}></div>
          <div className={s.profile}>
            <div className={s.avatar}>
              <img src="" alt="" />
            </div>
            <div className={s.profileInfo}>
              <div className={s.name}>Evgeniy Sh</div>
              <div className={s.email}>foksmix256@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;