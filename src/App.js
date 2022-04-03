import './css/App.css';
import Massages from "./components/Massages/Massages";
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import MassagesContainer from './components/Massages/MassagesContainer';



const App = () => {

  return (
    <div className="wrapper">
      <div className='sidebar'>
        <SidebarContainer />
      </div>
      <div className="content">
        <div className="header">
          <HeaderContainer />
        </div>
        <div className='contentPage'>
          <Routes>
            <Route exact path="/profile/*" element={<ProfileContainer />} />
            <Route path="/massages/*" element={<MassagesContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
