import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import axios from "axios";
import { setAuthUser } from "../helper/Storage";
import { useNavigate } from "react-router-dom";
//import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
    err: [],
    loading: false,
  });

  const LoginFun = (e) => {
    e.preventDefault();
    setlogin({ ...login, loading: true, err: [] });
    console.log(login);
    axios
      .post(
        "http://localhost:4000/auth/login",
        {
          email: login.email,
          password: login.password,
        }
        //, {headers}
      )
      .then((res) => {
        console.log(res);
        setlogin({ ...login, loading: false, err: [] });
        // setAuthUser(res.data);
        setAuthUser(res.data);
        navigate("/home");
      })
      .catch((errors) => {
        console.log(errors);
        setlogin({
          ...login,
          loading: false,
          err: errors.response.data.errors,
        });
      });
  };

  return (
    <div
      className="p-5 g-5"
      style={{
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 27%, rgba(148,187,233,1) 65%)",
      }}
    >
      <div
        class="signup-box "
        style={{
          background:
            "linear-gradient(90deg, rgba(238,174,202,1) 14%, rgba(148,187,233,1) 42%)",
        }}
      >
        <h1>Log In</h1>
        {login.err.map((error, index) => {
          return (
            <Alert key={index} variant="danger" className="p-2">
              E-mail or Password not found{" "}
            </Alert>
          );
        })}

        <Form onSubmit={LoginFun} style={{ borderBlock: "solid" }}>
          <label>Enter Your Name</label>

          <Form.Control
            type="email"
            placeholder=""
            value={login.email}
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
            required
          />
          <label>Enter Password</label>
          <Form.Control
            type="password"
            placeholder=""
            value={login.passwod}
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
            required
          />
          <div className="mb-2 p-5">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={login.loading === true}
            >
              Log in
            </Button>
          </div>
          <p>
            Don't have an account? <Link to="/signup"> Sign Up here</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
