import { connect } from 'react-redux';
import Header from './Header';


const mapStateToProps = (state) => {
    
    return {
        activeMenu: state.menu.activeMenu
    }
}

const mapDispatchToProps = () => {
    return {}
}


let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer