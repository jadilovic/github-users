import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
// avlija.eu.auth0.com
// X64P8jSCdCrZ3kJQw4NBkiBh4GoFICms

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="avlija.eu.auth0.com"
      clientId="X64P8jSCdCrZ3kJQw4NBkiBh4GoFICms"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
