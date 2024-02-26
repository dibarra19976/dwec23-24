import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Crear from "./Crear";
import Detalles from "./Detalles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Inicio />
            </Route>
            <Route exact path="/create">
              <Crear />
            </Route>
            <Route exact path="/details">
              <Detalles />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
