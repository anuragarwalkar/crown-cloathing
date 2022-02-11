import "./App.scss";
import React, { useEffect, useRef, useState } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import { auth, createUserProfileDocument } from "./firebaseInit";
import { getDoc } from "firebase/firestore";
import SignInSignUpPage from "./pages/signin-signup/SignInSignUpPage";
import CheckoutPage from "./pages/checkout/checkout.component";
import ShopPage from "./pages/shop/shop-page.component";
import HomePage from "./pages/home/home-page.component";
import CurrentUserContext from "./context/user/user.context";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const authSub = useRef();

  useEffect(() => {
    authSub.current = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        const savedUser = await getDoc(userRef);
        setCurrentUser({ id: savedUser.id, ...savedUser.data() });
      }
    });
    return () => {
      if (authSub.current) {
        authSub.current();
      }
    };
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <HeaderComponent />
      </CurrentUserContext.Provider>
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
