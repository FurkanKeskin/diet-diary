import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDbhFWmetlciP7l1Vj3BCqR5CBP55oPU04",
  authDomain: "diet-diary-11b9f.firebaseapp.com",
  databaseURL: "https://diet-diary-11b9f.firebaseio.com",
  projectId: "diet-diary-11b9f",
  storageBucket: "diet-diary-11b9f.appspot.com",
  messagingSenderId: "591824778600",
  appId: "1:591824778600:web:dd4a21116d42f244c192dd",
  measurementId: "G-H2R4Q3BX7K"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
