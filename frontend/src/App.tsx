import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SidebarContenxt, sidebarState } from './contexts/sidebar-context';
import { ThemeContext, themes } from './contexts/theme-context';
import Modal from './modals/Modal';
import { HomePage } from './pages/HomePage/HomePage';
import { UploadContentPage } from './pages/UploadContentPage/UploadContentPage';



function App() {

  const [sideState, setSideState] = useState(sidebarState.closed);
  const togglePlayPause = () => {
    setSideState(sideState === sidebarState.closed ? sidebarState.open : sidebarState.closed);
    console.log(sideState)
  }

  {/*const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }

  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
  }

  const [isOpen, setIsOpen] = useState(false)*/}

  return (
    <div className="App">
      {/*<div style={{ position: 'relative', zIndex: '1' }}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
      </div>*/}

      {/*<Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>*/}
      <ThemeContext.Provider value={themes.light}>
        <SidebarContenxt.Provider value={{
          sideBarWidth: sideState.sideBarWidth,
          displaySideBar: sideState.displaySideBar,
          togglePlayPause
        }}>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/upload" element={<UploadContentPage />} />
            </Routes>
          </BrowserRouter>
        </SidebarContenxt.Provider>
      </ThemeContext.Provider>
    </div >
  );
}

export default App;
