import { Navigate } from "react-router-dom"
import { connect } from 'react-redux';


export const withAuthRedirect = (Component) => {
    const RedirectContainer = (props) => {
        
        if (!props.isAuth) return <Navigate to='/login' />
        
        return <Component {...props} />
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    const withAuthRedirectContainer = connect(mapStateToProps, {})(RedirectContainer)

    return withAuthRedirectContainer
}



