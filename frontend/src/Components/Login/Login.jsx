import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login-img.png";
import Usericon from "../../assets/666201.png";
import "./login.css";
import Navbar from "../Navbar/Navbar";
import CommonSection from "../CommonSection/CommonSection";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login_form">
                <div className="user">
                  <img src={Usericon} alt="" />
                </div>
                <h2> Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder=" Enter Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder=" Enter PAssword"
                      required
                      id="pass"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <button className="btn secondary_btn auth_btn" type="Submit">
                    Login
                  </button>
                </Form>
                <p>
                  {" "}
                  Don't have an acoount? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
