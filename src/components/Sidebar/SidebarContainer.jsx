import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { updateActiveItemMenu } from './../../Redux/menuReducer';

const mapStateToProps = (state) => {
    return {
        ItemMenu: state.menu.menuItems
    }
}


const SidebarContainer = connect(mapStateToProps, { updateActiveItemMenu })(Sidebar)

export default SidebarContainer