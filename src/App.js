import React from "react";
import { routes } from "./routes";
import { Switch, Route, useLocation } from "react-router-dom";
import Store from "./store/index";
import NavBar from "./components/NavBar";
function App() {
    const location = useLocation();
    return (
        <Store>
            <NavBar />
            <Switch location={location} key={location.pathname}>
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path} component={Component} />
                ))}
            </Switch>
        </Store>
    );
}

export default App;
