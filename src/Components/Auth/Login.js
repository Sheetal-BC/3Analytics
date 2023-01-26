import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();

  //Function to handle the inputs which the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    const loginDetails = { [name]: value };
    setInputs({ ...inputs, ...loginDetails });
  };

  //To get the item from local storage
  useEffect(() => {
    if (localStorage.getItem("auth")) history.push("/post");
  }, []);

  //Funcion to handle the login button when a user clicks
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.username === "admin" && inputs.password === "admin@123") {
      localStorage.setItem("auth", true);
      history.push("/post");
    } else {
      setErrorMsg(!errorMsg);
    }
  };

  return (
    <>
      <div data-testid="login-1" className="form-elements">
        <form onSubmit={handleSubmit} autoComplete="off">
          <h1 className="text-light text-center">Login</h1>
          {errorMsg && (
            <p className="text-danger bg-danger-subtle m-3 text-center">
              <i>Please enter valid username and password</i>
            </p>
          )}
          <div className="m-5 row">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control bg-transparent text-light"
                id="staticEmail"
                placeholder="Enter UserName"
                name="username"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="m-5 row">
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control bg-transparent text-light"
                id="inputPassword"
                placeholder="Enter password"
                name="password"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
