import { Button, Form, Container, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginType } from "../../../Types/types";

export const Login = () => {
  const [mail, setMail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const LoginData: LoginType = {
      mail,
      pass,
    };
    console.log(LoginData);
    setMail("");
    setPass("");
  };

  const handleLoginPass = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPass(event.target.value);
  };

  const handleLoginMail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMail(event.target.value);
  };

  return (
    <Container className="vh-100 d-flex flex-row justify-content-center align-items-center">
      <Col lg={6} md={6} xs={12} s={12} xl={3}>
        <Card className="p-4">
          <div className="text-center mb-3">
            <h1>Login</h1>
          </div>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleLoginMail}
                value={mail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleLoginPass}
                value={pass}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <div className="text-center">
            <p className="mt-2">
              New User? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </Card>
      </Col>
    </Container>
  );
};
