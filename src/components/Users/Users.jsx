import styles from "./Users.module.css"
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    return (
        <div className={styles.body}>
            <div className={styles.pageContainer}>
                <button onClick={props.onPageChangedBack} className={`${styles.changePageBtn} ${props.currentPage > 1 ? '' : styles.notActiveBtn}`}></button>
                <div className={styles.page}>{props.currentPage}</div>
                <button onClick={props.onPageChangedForward}
                    className={`${styles.changePageBtn} ${props.currentPage < props.totalUsersCount ? '' : styles.notActiveBtn}`}>
                </button>
            </div>

            {props.users.map(u =>
                <div className={styles.itemContainer} key={u.id}>
                    <div className={styles.item}>
                        <NavLink to={'/profile/' + u.id} className={styles.user}>
                            <div className={styles.content}>
                                <img src={u.photos.small ? u.photos.small : props.userPhoto} className={styles.avatar} />
                                <div className={styles.info}>
                                    <div className={styles.name}>{u.name}</div>
                                    <div className={styles.status}>{u.status}</div>
                                    <div className={styles.location}>{'u.location.country'}</div>
                                </div>
                            </div>
                        </NavLink>
                        <button onClick={() => props.followingProcess(u.id, u.followed)}
                            disabled={props.followingInProcess.some(id => id === u.id)}
                            className={styles.followedBtn}>
                            {u.followed ? 'unfollow' : 'follow'}
                        </button>
                    </div>
                </div>

            )}

        </div>
    )
}

export default Users

