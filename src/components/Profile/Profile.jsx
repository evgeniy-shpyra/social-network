import s from "./Profile.module.css"

const Profile = (props) => {
    return (
        <div className={s.body}>
            <div className={s.lable}></div>
            <div className={s.info}>
                <div className={s.avatar}></div>
                <div className={s.name}>{props.name}</div>
            </div>
            <div className={s.rating}>{`Rating: ${props.rating}`}</div>
        </div>
    )
}

export default Profile

