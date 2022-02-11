import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store, persisstor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import CartProvider from "./providers/cart/cart.provider";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <BrowserRouter>
          <PersistGate persistor={persisstor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
