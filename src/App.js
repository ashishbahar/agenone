import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import { Route, Routes } from "react-router-dom";
import Usestatee from "./components/Usestatee";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/LINK" Component={Header} />
   </Routes> */}
      <Usestatee />
    </>
  );
}

export default App;
