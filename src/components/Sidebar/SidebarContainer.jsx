import { connect } from 'react-redux';
import Sidebar from './Sidebar';


const mapStateToProps = (state) => {
    return {
        ItemMenu: state.menu.menuItems
    }
}


const SidebarContainer = connect(mapStateToProps, {  })(Sidebar)

export default SidebarContainer