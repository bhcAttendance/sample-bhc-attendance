import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Nav/>
      <Route  exact to="/"><Home/></Route>
      <Route to="/login"><Login/></Route>
    </Router>
    
  );
}

export default App;
