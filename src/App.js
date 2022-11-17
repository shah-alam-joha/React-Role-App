import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/css/global.css";
import Login from "./components/auth/Login";
import Header from "./components/partials/Header";
import PermissionContainer from "./views/permissions/PermissionContainer";
import RoleContainer from "./views/roles/RoleContainer";
import UserContainer from "./views/users/UserContainer";

function App() {
  return (
    <div className="App">
      <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UserContainer />} />
          <Route path="/roles" element={<RoleContainer />} />
          <Route path="/permissions" element={<PermissionContainer />} />
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Routes>
      </div>
  );
}

export default App;
