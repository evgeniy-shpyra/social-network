import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { updateActiveMenuItemAction } from './../../Redux/menuReducer';

const mapStateToProps = (state) => {
    return {
        ItemMenu: state.menu.menuItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveItemMenu: (body) => {
            dispatch(updateActiveMenuItemAction(body))
        }
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer