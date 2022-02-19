import './css/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProFile from './components/ProFile/ProFile';



const App = (props) => {
    
  return (
    <div className="wrapper">
      <Sidebar menu={props.state.menu} dispatch={props.dispatch} />
      <div className="content">
        <Header activeMenu={props.state.menu.activeMenu} />     
        <ProFile profilePage={props.state.profilePage} dispatch={props.dispatch} />
      </div>
    </div>
  );
}


export default App;
