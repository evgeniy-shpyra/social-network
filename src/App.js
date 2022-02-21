import './css/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Massages from "./components/Massages/Massages";
import Posts from "./components/Posts/Posts";
import { Routes, Route } from 'react-router-dom';


const App = (props) => {
    
  return (
    <div className="wrapper">
      <Sidebar menu={props.state.menu} dispatch={props.dispatch} />
      <div className="content">
        <Header activeMenu={props.state.menu.activeMenu} />     
        <section className="body">
            <Routes>
                <Route exact path="/massages/*" element={<Massages messagesPage={props.state.messagesPage} dispatch={props.dispatch} />} />
                <Route path="/posts" element={<Posts postsPage={props.state.postsPage} dispatch={props.dispatch} />} />
            </Routes>
        </section>
      </div>
    </div>
  );
}


export default App;
