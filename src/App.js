import React, { useState } from "react";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeContext from "./common/ThemeContext";

const App = () => {
  const theme = useState("rgb(153 27 27)");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="bg-img">
        <Router>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
