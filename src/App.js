import "./App.scss";
import React, { useEffect, useRef } from "react";

import HomePage from "./pages/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header/HeaderComponent";
import SignInSignUpPage from "./pages/signin-signup/SignInSignUpPage";
import { auth, createUserProfileDocument } from "./firebaseInit";
import { getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

function App() {
  const dispatch = useDispatch();

  const authSub = useRef();

  useEffect(() => {
    authSub.current = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        const savedUser = await getDoc(userRef);
        dispatch(setCurrentUser({ id: savedUser.id, ...savedUser.data() }));
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
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
        <Route render={() => <Redirect to={{ pathname: "/signin" }} />} />
      </Switch>
    </div>
  );
}

export default App;
