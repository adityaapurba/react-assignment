import React, { useContext, useState } from "react";
import { Form, Button, Alert, Col, Row, Container } from "react-bootstrap";
import { UserContext } from "../context/usercontext";

import LoginImage from "../assets/images/login.png";
import Logo from "../assets/images/logo.jpg";
import users from "../assets/data/data.json";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const {setUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Find the user from the imported JSON data
    const user = users.users.find(
      (u) => u.email === inputUsername && u.password === inputPassword
    );

    if (user) {
      setUser(user);
      navigate("/dashboard");
    } else {
      setShow(true);
    }
    setLoading(false);
  };

  const handlePassword = () => {
    alert("atleast try 123456. advice from meow meow");
  };



  return (
    <div
      className="sign-in__wrapper mt-5"
      //   style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="sign-in__backdrop"></div>
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <Row className="w-100">
           {/* left side image */}
          <Col md={6} className="d-none d-md-block">
            <div className="image-container">
              <img
                src={LoginImage}
                alt="Login Illustration"
                className="img-fluid"
              />
            </div>
          </Col>

          {/* Right side form */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Form
              className="shadow p-4 bg-white rounded"
              onSubmit={handleSubmit}
            >
              <img
                className="img-thumbnail mx-auto d-block mb-2 rounded-circle"
                src={Logo}
                alt="logo"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />

              <div className="h4 mb-2 text-center">Log In</div>
              {show ? (
                <Alert
                  className="mb-2"
                  variant="danger"
                  onClose={() => setShow(false)}
                  dismissible
                >
                  Incorrect username or password.
                </Alert>
              ) : (
                <div />
              )}
              <Form.Group className="mb-2" controlId="username">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  value={inputUsername}
                  placeholder="meow@gmail.com"
                  onChange={(e) => setInputUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={inputPassword}
                  placeholder="password"
                  onChange={(e) => setInputPassword(e.target.value)}
                  required
                />
              </Form.Group>
              {!loading ? (
                <Button className="w-100" variant="primary" type="submit">
                  Log In
                </Button>
              ) : (
                <Button
                  className="w-100"
                  variant="primary"
                  type="submit"
                  disabled
                >
                  Logging In...
                </Button>
              )}
              <div className="d-grid justify-content-end">
                <Button
                  className="text-muted px-0"
                  variant="link"
                  onClick={handlePassword}
                >
                  Forgot password?
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
