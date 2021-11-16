import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap"
import './App.css';
import logo from "../src/components/logo.jpg"
import Intro from './components/Intro'
import Main from "./components/main"
function App() {
  return (
    <div className="App">
     <Navbar bg="bg" className="hello" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#service">SERVICES</Nav.Link>
        <Nav.Link href="#A-propos">A propos</Nav.Link>
        <Nav.Link href="#Galerie">Galerie</Nav.Link>
        
        <NavDropdown title="contact" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Intro />
<Main />

    </div>
  );
}

export default App;
