import './css/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Massages from "./components/Massages/Massages";
import Posts from "./components/Posts/Posts";
import { Routes, Route } from 'react-router-dom';


const App = (props) => {
  
  return (
    <div className="wrapper">
      <Sidebar store={props.store} />
      <div className="content">
        <Header store={props.store} />
        <section className="body">
          <Routes>
            <Route exact path="/massages/*" element={<Massages store={props.store} />} />
            <Route path="/posts" element={<Posts store={props.store} />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}


export default App;
