import { connect } from 'react-redux';

export const withBlockNavLinkWithoutAuth = (Component) => {
    
    const NavLinkContainer = (props) => {
        
        const disable = !props.isAuth ? {pointerEvents: 'none'} : {}
        
        return <Component {...props} style={disable} />
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps, {})(NavLinkContainer)
}