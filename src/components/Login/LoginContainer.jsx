import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { submitLoginData, getAuthUserData } from '../../Redux/authReducer';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Preloader from './../common/Preloader/Preloader';
import { reduxForm } from 'redux-form';
import styles from './Login.module.css'


const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm)

const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        props.submitLoginData(formData)
    }

    if (props.isAuth)
        return <Navigate to={'/profile'} />

    if (props.IsFetching)
        return <Preloader isFullScreen={false} />

    return (
        <div className={styles.containerForm}>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        IsFetching: state.auth.IsFetching
    }

}



export default connect(mapStateToProps, { submitLoginData, getAuthUserData })(LoginContainer)