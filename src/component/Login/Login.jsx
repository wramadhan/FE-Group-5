import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../styles/Login.css";
import Header from "../Header";

import appLogo from "../../images/mychat.png";

const Login = () => {
  return (
    <>
      <Header />
      <div className="atas">
        <img className="img" src={appLogo} alt="appLogo" />
        <h1 className="MyChat">My Chat</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="formEmail"
                  type="email"
                  placeholder="E-mail"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className="formPwd"
                  type="password"
                  placeholder="Kata Sandi"
                />
              </Form.Group>
              <Button className="tombol" type="submit">{' '}
                Masuk
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
        <p className="belum">Belum Memiliki akun?</p>
        <p className="daftar">Daftar Sekarang</p>
      </Container>
    </>
  );
};
export default Login;
