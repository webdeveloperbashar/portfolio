import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Button } from "@material-ui/core";
import Sidebar from "./components/Pages/Sidebar/Sidebar";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Education from "./components/Pages/Education/Education";
import Hobby from "./components/Pages/Hobby/Hobby";
import Error from "./components/Pages/Error/Error";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
// import { WiMoonWaningCrescent2 } from "react-icons/wi";

const App = () => {
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
  const pages = ["home", "about", "education", "hobby", "contact"];
  const urls = {
    home: "/",
    about: "/about",
    education: "/education",
    hobby: "/hobby",
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
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/hobby">
          <Hobby />
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
