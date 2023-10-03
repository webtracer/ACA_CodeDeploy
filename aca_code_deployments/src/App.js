import logo from './img/amdocs-logo-2x_0.png'
import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import QAT_PET_CODE_DROPS from './pages/QAT_Pet_CodeDrops'
import ST_PET_CODE_DROPS from './pages/ST_PET_CodeDrops'
import STG_CODE_DROPS from './pages/STG_CodeDrops'
import PROD_CODE_DROPS from './pages/PROD_CodeDrops'
import HomePage from './pages/HomePage'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} width={160} height={35} alt="Amdocs logo"/>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/qat_deployment" element={ <QAT_PET_CODE_DROPS />}></Route>
              <Route path="/st_pet_deployment" element={ <ST_PET_CODE_DROPS />}></Route>
              <Route path="/stg_deployment" element={ <STG_CODE_DROPS />}></Route>
              <Route path="/prod_deployment" element={ <PROD_CODE_DROPS />}></Route>
            </Routes>
          </Router>
        </header>
      </div>
  );
}
export default App;
