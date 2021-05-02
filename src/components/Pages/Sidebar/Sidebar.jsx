// import { Nav } from "react-bootstrap";
import { Switch } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { IoHome, IoSchool } from "react-icons/io5";
import {
  MdCreateNewFolder, MdFavorite,
  MdPermContactCalendar
} from "react-icons/md";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
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
              <Link to="/">
                <span>WDB</span>
              </Link>
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
              <Link activeStyle={{background: 'red'}} to="/">
                <span>
                  <IoHome />
                </span>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>
                  <IoMdContact />
                </span>
                About
              </Link>
            </li>
            <li>
              <Link to="/education">
                <span>
                  <IoSchool />
                </span>
                Education
              </Link>
            </li>
            <li>
              <Link to="/hobby">
                <span>
                  <MdFavorite />
                </span>
                Hobby
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>
                  <MdPermContactCalendar />
                </span>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <MdCreateNewFolder />
                </span>
                Create Website
              </Link>
            </li>
            <span className={`d-4 ${state.checkedA ? 'text-white' : 'text-dark'}`}>Light Mode</span>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              {
                state.checkedA ? document.body.classList = `${color}` : document.body.classList = 'light'
              }
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
