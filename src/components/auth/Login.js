import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import loginService from "../../services/auth/loginService";
import "./Login.css";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [show, setShow] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
   
    if (typeof userData != "undefined") {
      if (userData.username.username && userData.username.username.length > 0) {
        navigate("/users", {replace: true});
      }
    }
  }, [navigate]);

  function handleUsername(e) {
    const username = e.target.value;
    setUserName({ username });
  }
  function handlePassword(e) {
    const password = e.target.value;
    setPassword({ password });
  }

  function handleLogin() {
    if (loginService(username, password)) {
      setErrorMessage("");
      localStorage.setItem("userData", JSON.stringify({ username, password }));
      navigate("/users", {replace: true});
    } else {
      setErrorMessage("Sorry! Username and Password invalid.");
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center login-area">
        <Card style={{ width: "30rem" }}>
          <h3 className="text-center mt-3 mb-2">Login your Account</h3>
          <hr></hr>
          {errorMessage.length > 0 && (
            <Alert variant="danger" show={true} className="m-2">
              <p>{errorMessage}</p>
            </Alert>
          )}
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  // placeholder="Enter your username"
                  onChange={handleUsername}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  // placeholder="Enter your Password"
                  onChange={handlePassword}
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  variant="primary"
                  type="button"
                  className="btn btn-primary btn-block text-uppercase login-button"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
