import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import Destination from "./component/Destination";
import Home from "./component/Home";
import Crew from "./component/Crew";
import TechNology from "./component/Technology";

function App() {
  return (
    <BrowserRouter>
      {
        <Route
          render={() => (
            <div>
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/destination" exact component={Destination} />
                <Route path="/crew" exact component={Crew} />
                <Route path="/technology" exact component={TechNology} />
              </Switch>
            </div>
          )}
        />
      }
    </BrowserRouter>
  );
}

export default App;
