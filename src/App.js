// import logo from "./logo.svg";
// import "./App.css";

import Login from "./pages/login/index";
import Home from "./pages/home/index";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.appcontainer}>
      <Router>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
