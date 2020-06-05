import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

// import NavContainer from "./nav_container";

import SplashContainer from "./auth/splash_container";
import LoginFormContainer from "./auth/login_form_container";
import BrowseContainer from "./app/browse_container";
import Watch from "./app/watch";
import ProfilesContainer from "./app/profiles_container";

// AuthRoutes are for non-logged in users, ProtectedRoutes are for logged-in users.

const App = () => (
    <main id="app-main">
        <AuthRoute exact path="/" component={SplashContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <Switch>
            <ProtectedRoute exact path="/browse/:id/watch" component={Watch} />
            <ProtectedRoute path="/browse" component={BrowseContainer} />
        </Switch>
        <ProtectedRoute path="/profiles" component={ProfilesContainer} />
    </main>
)

export default App;