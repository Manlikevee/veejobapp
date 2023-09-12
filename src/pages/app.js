import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Login from "./Login"
import Userprofile from "../Mypages/Userprofile"
import Dashboard from "../Mypages/Dashboard"
import Jobs from "../Mypages/Jobs"
import Messaging from "../Mypages/Messaging"
import Saves from "../Mypages/Saves"
const App = () => (


  
    <Router>
      <PrivateRoute path="/app/profile" component={Userprofile} />
      <PrivateRoute path="/app/Saves" component={Saves} />
      <PrivateRoute path="/app/Dashboard" component={Dashboard} />
      <PrivateRoute path="/app/Alljobs" component={Jobs} />
      <PrivateRoute path="/app/Messaging" component={Messaging} />
      <Login path="/app/login" />
    </Router>

)

export default App