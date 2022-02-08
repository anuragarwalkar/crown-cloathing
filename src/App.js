import "./App.scss";
import React, { useEffect, useRef } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/HeaderComponent";
import { auth } from "./firebaseInit";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserInit } from "./redux/user/user.actions";
import SignInSignUpPage from "./pages/signin-signup/SignInSignUpPage";
import CheckoutPage from "./pages/checkout/checkout.component";
import ShopPage from "./pages/shop/shop-page.component";
import HomePage from "./pages/home/home-page.component";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const authSub = useRef();

  useEffect(() => {
    authSub.current = auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setCurrentUserInit(user));
      }
    });

    return () => {
      if (authSub.current) {
        authSub.current();
      }
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/signin"
          render={() =>
            currentUser ? (
              <Redirect to={{ pathname: "/" }} />
            ) : (
              <SignInSignUpPage />
            )
          }
        />
        <Route path="/checkout" component={CheckoutPage} />
        <Route render={() => <Redirect to={{ pathname: "/signin" }} />} />
      </Switch>
    </div>
  );
}

export default App;
