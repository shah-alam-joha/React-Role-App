import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userData");
    setIsLogged(false);
    navigate("/", {replace:true});
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
    if (typeof userData != "undefined") {
      if (userData.username.username && userData.username.username.length > 0) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    }
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Role App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {!isLogged && (
              <Nav.Link>
                <Link to="/">Login</Link>
              </Nav.Link>
            )}

            {isLogged && (
              <>
                <Nav.Link>
                  <Link to="/users">Users</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link onClick={logout}>Logout</Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
