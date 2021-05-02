// import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { IoHome, IoSchool } from "react-icons/io5";
import {
  MdFavorite,
  MdPermContactCalendar
} from "react-icons/md";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Me from "../../Image/me.png";
import "./Sidebar.css";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showHideSidebar = () => setSidebar(!sidebar);
  // sidebar hide and show function
  document.onkeydown = (e) => {
    if (e.altKey && e.which === 65) {
      showHideSidebar();
    }
  };

  const [state, setState] = React.useState({
    checkedA: false
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    localStorage.setItem('color', 'dark')
  };
  const color = localStorage.getItem('color')

  return (
    <div>
      <div className="header text-white">
        <div className="container">
          <header className="d-flex align-items-center justify-content-between">
            <div className="toggle-icon" onClick={showHideSidebar}>
              <h2>
                <RiMenu3Fill />
              </h2>
            </div>
            <div className="header-right" title='Web Developer Bashar'>
              <NavLink to="/">
                <span>WDB</span>
              </NavLink>
            </div>
          </header>
        </div>
      </div>
      <div
        className={`text-white ${
          sidebar ? "sidebar-menu active" : "sidebar-menu"
        }`}
        onClick={showHideSidebar}
        id="sidebar"
      >
        <div className="container-fluid">
          <div className="hide-icon">
            <h3>
              <RiCloseLine />
            </h3>
          </div>
          <nav>
            <strong>
              <img src={Me} className="img-fluid" alt="" />
              <h5>Abul Bashar</h5>
            </strong>
            <li>
              <NavLink exact activeStyle={{background: '#99cc00', color: 'white'}} to="/">
                <span>
                  <IoHome />
                </span>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{background: '#99cc00', color: 'white'}} to="/about">
                <span>
                  <IoMdContact />
                </span>
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{background: '#99cc00', color: 'white'}} to="/project">
                <span>
                  <IoSchool />
                </span>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{background: '#99cc00', color: 'white'}} to="/portfolio">
                <span>
                  <MdFavorite />
                </span>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{background: '#99cc00', color: 'white'}} to="/contact">
                <span>
                  <MdPermContactCalendar />
                </span>
                Contact
              </NavLink>
            </li>
            {/* <span className={`d-4 ${state.checkedA ? 'text-white' : 'text-dark'}`}>Light Mode</span>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              {
                state.checkedA ? document.body.classList = `${color}` : document.body.classList = 'light'
              } */}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
