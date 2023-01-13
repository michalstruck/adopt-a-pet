import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeContext from "./common/ThemeContext";
import { QueryClientProvider, QueryClient } from "react-query";
alert(
  "Excuse the malfunctioning images - the api I used to develop this page proved to be unusable in production, so I had to improvise. Look at the expandable menu tho!"
);
const client = new QueryClient();

const App = () => {
  const theme = useState("rgb(153 27 27)");
  return (
    <QueryClientProvider client={client}>
      <ThemeContext.Provider value={theme}>
        <div className="bg-img px-0 pt-24 min-w-fit w-full h-fit">
          <Router basename="/">
            <Navbar />
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
    </QueryClientProvider>
  );
};
export default App;
