import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Login from "./Login"
import Userprofile from "../privateroute/Userprofile"

const App = () => (

    <Router>
      <PrivateRoute path="/app/profile" component={Userprofile} />
      <Login path="/app/login" />
    </Router>

)

export default App