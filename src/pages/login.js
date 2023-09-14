import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pwd = e.target.pwd.value;
    console.log(email, pwd);
    // signInWithEmailAndPassword(auth, email, pwd)
    //   .then((userCredential) => {
    //     // Signed in
    //     // const user = userCredential.user;
    //     // ...
    navigate("/");
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     setErrorMessage(errorCode);
    //     console.log(errorMessage);
    //   });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            autoComplete="current-email"
            placeholder="Insert your email"
          />
          <input
            type="password"
            id="pwd"
            autoComplete="current-password"
            placeholder="Insert your password"
          />
          <button>Login</button>
          {/* {errorMessage && <span className="error">{errorMessage}</span>} */}
        </form>
        <p>
          You dont have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
