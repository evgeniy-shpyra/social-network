import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href={s.logo}>
          <div className={s.logoDiv}></div>
        </a>
        <nav className={s.body}>
          <ul className={s.list}>
            <li><a href="#" className={s.link}>Link</a></li>
            <li><a href="#" className={s.link}>Link</a></li>
            <li><a href="#" className={s.link}>Link</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;