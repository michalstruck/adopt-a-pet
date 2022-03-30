import React, { useState } from "react";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeContext from "./common/ThemeContext";

const App = () => {
  const theme = useState("rgb(153 27 27)");
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="px-0 pb-8 pt-24 m-0 min-w-fit"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
        }}
      >
        <Router>
          <Link to="/">
            <img
              alt="logo"
              className="absolute top-2 left-2"
              src="http://static.frontendmasters.com/resources/2019-05-02-complete-intro-react-v5/image-logo.png"
            />
          </Link>
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
