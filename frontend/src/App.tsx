import React from 'react';
import './App.css';
import { ContentPage } from './pages/ContentPage/ContentPage';
import ProfilePage from './pages/Profile/ProfilePage';
import { ProfilePageSmall } from './pages/ProfileSmall/ProfilePageSmall';
import { LoginPage } from './pages/Unauthenticated/LoginPage/LoginPage';
import { RegistrationPage } from './pages/Unauthenticated/RegistrationPage/RegistrationPage';


function App() {
  return (
    <div className="App">
      {/*<div className="d-none d-md-block">
        <ProfilePage />
      </div>
      <div className="d-block d-md-none">
        <ProfilePageSmall />
      </div>*/}
      {/*<ContentPage />*/}
      {/*<LoginPage />*/}
      <RegistrationPage />
    </div>
  );
}

export default App;
