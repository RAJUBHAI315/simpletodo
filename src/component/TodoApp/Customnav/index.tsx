import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Customnav = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-4" fixed="top">
      <Navbar.Brand as={Link} to="/">
        Todo App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-between w-25">
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Signup
          </Nav.Link>
          <Button variant="outline-dark" className="py-1">
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
