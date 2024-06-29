import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import hall from './img/coverPage.JPG';
import {InitialUi} from "./view/initialUi/InitialUi";
import Home from './view/home/Home';
import Testing from './view/testing/Testing';
import LoginIn from './view/loginIn/LoginIn';
import SignUp from './view/signUp/signUp';
import userAccount from './view/userAccount/userAccount';
import Dashboard from './view/dashBoad/dashBoad';


function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <>
       
<BrowserRouter>
<Routes>
    <Route path={"/"} Component={InitialUi}></Route>
    <Route path={"/Home"} Component={Home}></Route>
    <Route path={"/testing"} Component={Testing}></Route>
    <Route path={"/login"} Component={LoginIn}></Route>
    <Route path={"/sign"} Component={SignUp}></Route>
    <Route path={"/us"} Component={userAccount}></Route>
    <Route path={"/ds"} Component={Dashboard}></Route>
</Routes>

</BrowserRouter>
</>
  );
}

export default App;
