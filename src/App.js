import './css/App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import User from './components/User/User';
import ProFile from './components/ProFile/ProFile';



const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="mainContent">
        <Sidebar />
        <ProFile />
        <User />
      </main>
      <Footer />
    </div>
  );
}


export default App;
