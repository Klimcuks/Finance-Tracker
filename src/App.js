import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import  Home  from "./pages/home/Home";
import  Login  from "./pages/login/Login";
import  Navbar  from "./pages/components/Navbar";
import Signup from './pages/signup/Signup'
// import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
