import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Error from "./components/Pages/Error/Error";
import Home from "./components/Pages/Home/Home";
import classes from "./components/Pages/Home/Home.module.css";
// import { WiMoonWaningCrescent2 } from "react-icons/wi";
import Project from './components/Pages/Project/Project';
import Sidebar from "./components/Pages/Sidebar/Sidebar";

const App = () => {
  const colors = ["#FDA7DF", "#12ddb2;", "#ED4C67", "#FFC312"];
  const createAnimation = () => {
    const body = document.querySelector("body");
    const square = document.createElement("span");
    square.className = `${classes.animationSquare}`;
    const size = Math.random() * 60;
    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";

    square.style.bottom = Math.random() * window.innerHeight + "px";
    square.style.left = Math.random() * window.innerWidth + "px";

    const bg = colors[Math.floor(Math.random() * colors.length)];

    square.style.background = bg;
    body.appendChild(square);
    setTimeout(() => {
      square.remove();
    }, 5000);
  };
  setInterval(createAnimation, 1000);
  const [mic, setMic] = useState(false);
  const showHideMic = () => setMic(!mic);
  const commands = [
    {
      command: ["Go to *", "Open * page", "Open *", "*"],
      callback: (gotoPage) => setUrl(gotoPage),
    },
  ];
  useSpeechRecognition({ commands });
  const [url, setUrl] = useState("");
  const pages = ["home", "about", "projct", "portfolio", "contact"];
  const urls = {
    home: "/",
    about: "/about",
    project: "/project",
    portfolio: "/portfolio",
    contact: "/contact",
  };
  let output = "";
  if (url) {
    if (pages.includes(url)) {
      output = <Redirect to={urls[url]} />;
    } else {
      output = <Redirect to="/notfound" />;
    }
  }
  const style = {
    fontSize: "30px",
    right: "1%",
    top: "50%",
    position: "fixed",
    zIndex: "9999",
    backgroundColor: "#99cc00",
  };
  return (
    <BrowserRouter>
      <Sidebar />
      <span onClick={showHideMic}>
        <Button
          style={style}
          onClick={
            mic
              ? SpeechRecognition.stopListening
              : SpeechRecognition.startListening
          }
          variant="contained"
          color="secondary"
        >
          {mic ? <FaMicrophone /> : <FaMicrophoneSlash />}
        </Button>
      </span>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/project">
          <Project/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      {output}
    </BrowserRouter>
  );
};
export default App;
