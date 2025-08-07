import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import logo from './images/logo4.png';
import './styles/App.css';
import kackage from './images/package.png';
import bussiness from './images/busi.png';
import Bussiness from './components/Bussiness';
import Pan from './components/Pan';
import { PersonalContext } from './apis/Personal';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Termine from './components/Termine';

function App() {
 const [open, setOpen] = React.useState(false);
 const {deal}=useContext(PersonalContext);

 
 const toggleMenu = () =>{
    setOpen(!open);
    const menu = document.getElementsByClassName('App-nav')[0];
    if(window.innerWidth < 768) {
      if (!open) { // Remember: setOpen(!open) is async, so 'open' still holds the previous state here
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
            menu.style.flexDirection = 'column';
        }
    }
 }



  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='App-menu-icon' onClick={toggleMenu}>{open ? "☰":"✕"}</div>
          <img src={logo} className="App-logo" alt="logo" />

          {/* Navigation Links */}
          <nav className="App-nav">
            <NavLink to="/" className="nav-link" onClick={toggleMenu}>About</NavLink>
            <NavLink to="/skills" className="nav-link" onClick={toggleMenu}>Skills</NavLink>
            <NavLink to="/projects" className="nav-link" onClick={toggleMenu}>Projects</NavLink>
            <NavLink to="/termine" className="nav-link" onClick={toggleMenu}>Contact</NavLink>
          </nav>
          <span className='bussiness-card'>
            <NavLink to="/bussiness" className="image-Link"><img alt="Bussiness" src={bussiness}/><p className='amount'>{deal}</p></NavLink>
            <NavLink to="/apps" className="image-Link">
                   <img alt="Apps" src={kackage} />
            </NavLink>
          </span>
        </header>

        {/* Page Content */}
        <main className="App-content">
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/termine" element={<Termine />} />
            <Route path="/bussiness" element={<Bussiness/>}/>
            <Route path="/apps" element={<Pan />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
