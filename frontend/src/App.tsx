import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ViewPhotoPage } from './pages/ViewPhotoPage/ViewPhotoPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/viewphoto" element={<ViewPhotoPage />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
