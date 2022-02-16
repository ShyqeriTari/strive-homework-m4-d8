import { Navbar, Nav, Image, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from 'react-router-dom'
// backoffices is wrong linked, check it
const MyNavbar = function () {

  const location = useLocation()

  return (
    <>
      <Navbar   expand="lg" className="text-white">
        <Navbar.Brand href="#home">
        <Link to={'/' }>
          <Image
            src="./img\Netflix_Logo_RGB.png"
            alt="Netflix logo"
            width={130}
          /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-white">
          <Link to={'/' }>
            <div  className={
                location.pathname === '/' ? 'nav-link text-white mr-3 font-weight-bolder' : 'nav-link text-white mr-3'
              }>Home</div>
            </Link>
            <Link to={'/tv-shows' }>
            <div  className={
                location.pathname === '/tv-shows' ? 'nav-link text-white mr-3 font-weight-bolder' : 'nav-link text-white mr-3'
              }>TV shows</div>
            </Link>
                      </Nav>

          <Image
            src="./img/icons8-ricerca.svg"
            className="lens"
            alt="lens image"
            width={25}
          />
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              KIDS
              <Image
                className="mx-2"
                src="./img/icons8-jingle-bell-128.png"
                width={20}
              />
              <Image src="./img/icons8-avatar-128.png" width={30} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
