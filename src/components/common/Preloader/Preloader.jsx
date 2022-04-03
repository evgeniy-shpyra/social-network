import preloader from '../../../assets/images/Preloader.svg'
import styles from './Preloader.module.css'

const Preloader = (props) => {
    
    return (
        <div className={styles.container}>
            <img className={styles.preloader} src={preloader} alt="" />
        </div>
    )
}

export default Preloader