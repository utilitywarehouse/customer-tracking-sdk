import React, {useEffect} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
} from "react-router-dom";

import {
    Tracker, MixpanelBackend,
} from "@utilitywarehouse/customer-tracking-for-browser";

const tracker = new Tracker(
    new MixpanelBackend("c4f9c42eec07534c28a8903a7c471f82", {debug: true, api_host: "https://api-eu.mixpanel.com"}),
    {id: "my-application"}
)

function usePageViews() {

    let location = useLocation()

    useEffect(
        () => {
            tracker.trackVisit({
                location: location.pathname,
            })
        },
        [location]
    )
}

function App() {
    return (
        <Router>
            <Routing />
        </Router>
    )
}

function Routing() {
    usePageViews()
    return (

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                        <li>
                            <Link to="/opt-in">Opt In</Link>
                        </li>
                        <li>
                            <Link to="/opt-out">Opt Out</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                    <Route path="/opt-in">
                        <OptIn />
                    </Route>
                    <Route path="/opt-out">
                        <OptOut />
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
    )
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function OptIn() {
    tracker.enable();
    return <h2>Opt In</h2>;
}

function OptOut() {
    tracker.disable();
    return <h2>Opt Out</h2>;
}

function Login() {
    tracker.identify({id: "123", number: "acc-123"});
    return <h2>Sent identify command</h2>;
}

function Logout() {
    tracker.reset();
    return <h2>Sent reset command</h2>;
}

export default App;
