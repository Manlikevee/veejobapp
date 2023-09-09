import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Login from "./Login"
import Userprofile from "../privateroute/Userprofile"
import Dashboard from "../privateroute/Dashboard"
import Jobs from "../privateroute/Jobs"
const App = () => (

    <Router>
      <PrivateRoute path="/app/profile" component={Userprofile} />
      <PrivateRoute path="/app/Dashboard" component={Dashboard} />
      <PrivateRoute path="/app/Alljobs" component={Jobs} />
      <Login path="/app/login" />
    </Router>

)

export default App