import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "../src/pages/Landing/Landing";
import Layout from "../src/pages/Layout/Layout";
import NewBadge from "../src/pages/NewBadge/NewBadge";
import Badges from "../src/pages/Badges/Badges";
import BadgeDetails from "../src/components/BadgeDetails";
import NotFound from "../src/pages/NotFound/NotFound";
import EditBadge from "../src/pages/EditBadge/EditBadge";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
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