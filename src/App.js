import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from "./pages/layout/Layout";
import Main from "../src/pages/Main/Main";
import NewBadge from "./pages/NewBadge/NewBadge"
import Badges from "./pages/Badges/Badges"
import BadgeDetails from "./components/BadgeDetails"
import NotFound from "./pages/NotFound/NotFound"
import EditBadge from "./pages/EditBadge/EditBadge";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/:badgeId" component={BadgeDetails}></Route>
          <Route exact path="/:badgeId/edit" component={EditBadge}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
