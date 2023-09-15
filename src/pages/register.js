import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pwd = e.target.pwd.value;
    const confirmPwd = e.target.confirmPwd.value;

    if (pwd === confirmPwd) {
      //   createUserWithEmailAndPassword(auth, email, pwd)
      //     .then((userCredential) => {
      //       // Signed in
      //       // const user = userCredential.user;
      //       // ...
      //       navigate("/");
      //     })
      //     .catch((error) => {
      //       const errorCode = error.code;
      //       const errorMessage = error.message;
      //       setErrorMessage(errorCode);
      //       console.log(errorMessage);
      //     });
    } else {
      setErrorMessage("Password do not match");
    }
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        setErrorMessage(error);
      });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            autoComplete="current-email"
            placeholder="Insert your email"
          />
          <input
            type="password"
            id="confirmPwd"
            autoComplete="current-password"
            placeholder="Insert your password"
          />
          <input
            type="password"
            id="pwd"
            autoComplete="current-password"
            placeholder="Confirm your password"
            onChange={() => setErrorMessage("")}
          />
          <button>Login</button>
          {errorMessage && <span className="error">{errorMessage}</span>}
        </form>
        <p>
          You dont have an account? <Link to="/login">Login</Link>
        </p>
        <div className="loginbtns">
          <button
            type="button"
            className="login-with-google-btn"
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
