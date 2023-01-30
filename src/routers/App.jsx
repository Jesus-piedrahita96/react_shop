import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NewPass } from "../containers/NewPass";
import Layout from "../containers/Layout";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

import '../css/global.scss'





function App() {
  return(
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/newpass' component={NewPass} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App