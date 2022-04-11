import { Field } from 'redux-form'
import { required } from '../../utilities/validate'
import { Element } from '../common/Form/FormsControl'
import styles from './Login.module.css'

const Input = Element('input')

const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit} className={styles.form} >
            <div className={styles.inputFields}>
                <div className={styles.text}>
                    <Field name={'email'}
                        component={Input}
                        type={'text'}
                        placeholder={'login'}
                        validate={[required]} />
                </div>
                <div className={styles.text}>
                    <Field name={'password'}
                        component={Input}
                        type="password"
                        placeholder={'password'}
                        validate={[required]} />
                </div>
            </div>
            <div className={styles.inputCheckbox}>
                <Field name={'isRemember'}
                    component={'input'}
                    type={'checkbox'} />
                <span className={styles.labelCheckbox}>remember me</span>
            </div>
            {props.error && <div>{props.error}</div>}
            
            <button type={'submit'} className={styles.button}>Login</button>
        </form>
    )
}


export default LoginForm