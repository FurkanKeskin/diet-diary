import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import '../index.css';
import Button from 'react-uikit-button';

const SignIn = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("/meals");
      });
  };
  return (
    <div>
      <div className="row">
        <div className="column left">
          <div className="sign-in">
            <h1>Sign In</h1>
            <Button
              onClick={(event) => {
                event.preventDefault();
                signInWithGoogle();
              }}
            >
              Sign In with Google
            </Button>
          </div>
        </div>
        <div class="column right">
            <div class="detail ">
                <p style={{textAlign: "center"}}>If you are trying to track your daily diet, then this app is for you. You can track everything you eat and drink as well as keep your exercises, activities and medications with this simple app.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
