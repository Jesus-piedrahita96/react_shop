import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../containers/Layout";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { NewPass } from "../pages/NewPass";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import PasswordRecovery from "../pages/PasswordRecovery";
import MyAccount from "../pages/MyAccount";
import Orders from "../pages/Orders";
import SendEmail from "../pages/SendEmail";
import Header from '../components/Header';
import ProductItem from "../components/ProductItem";

import '../css/global.scss'

function App() {
  return(
    <>
      <BrowserRouter>
        <Layout>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={CreateAccount} />
            <Route exact path='/new-password' component={NewPass} />
            <Route exact path='/password-recovery' component={PasswordRecovery} />
            <Route exact path='/account' component={MyAccount} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/orders' component={Orders} />
            <Route exact path='/send-email' component={SendEmail} />
            <Route exact path='/prueba' component={ProductItem} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App