import React from 'react';
import './App.css';
import Massages from "./components/Massages/Massages";
import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import MassagesContainer from './components/Massages/MassagesContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { initializeApp } from './Redux/appReducer'
import Preloader from './components/common/Preloader/Preloader';



class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader isFullScreen={true} />
    }
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
              <Route path="/" element={this.props.isAuth ? <Navigate to='/profile' /> : <Navigate to='/login' />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/massages/*" element={<MassagesContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
  }
}

export default compose(connect(mapStateToProps, { initializeApp }))(App);
