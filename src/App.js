import './css/App.css';
import Massages from "./components/Massages/Massages";
import PostsContainer from "./components/Posts/PostsContainer";
import { Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {

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
            <Route exact path="/profile" element={<ProfileContainer />} /> 
            <Route path="/massages/*" element={<Massages />} />
            <Route path="/posts" element={<PostsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
