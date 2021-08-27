
import './App.css';
import Dashboard from './components/Dashboard'
import Dashboard2 from './components/Dashboard2';
import Header from './components/Layout/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
