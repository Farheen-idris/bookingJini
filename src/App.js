import logo from "./logo.svg";
import Home from "./Components/Home";
import Packages from "./Components/Packages";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />}></Route>{" "}
        <Route
          exact
          path="/packages"
          render={(props) => <Packages {...props} />}
        ></Route>{" "}
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
