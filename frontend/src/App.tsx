import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Authenticated/HomePage/HomePage';
import { ProfilePage } from './pages/Authenticated/ProfilePage/ProfilePage';
import { ProfilePage2 } from './pages/Authenticated/ProfilePage2/ProfilePage2';
import { ViewContentPage } from './pages/Authenticated/ViewContentPage/ViewContentPage';
import { LoginPage } from './pages/Unauthenticated/LoginPage/LoginPage';
import { RegistrationPage } from './pages/Unauthenticated/RegistrationPage/RegistrationPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/view" element={<ViewContentPage />} />
          <Route path="/profile2" element={<ProfilePage2 />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
