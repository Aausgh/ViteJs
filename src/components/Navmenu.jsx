import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navmenu() {
      return (
            <Navbar bg="dark" data-bs-theme="dark">
                  <Container>

                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>

                        <Nav className="ms-auto ">

                              <Nav.Link>
                                    <Link to="/counter" className='text-decoration-none text-light'>Counter</Link>
                              </Nav.Link>

                              <Nav.Link>
                                    <Link to="/quotes" className='text-decoration-none text-light'>Quotes</Link>
                              </Nav.Link>

                              <Nav.Link>
                                    <Link to="/products" className='text-decoration-none text-light'>Products</Link>
                              </Nav.Link>


                              <Nav.Link>
                                    <Link to="/" className='text-decoration-none text-light'>Login</Link>
                              </Nav.Link>

                              <Nav.Link>
                                    <Link to="/signup" className='text-decoration-none text-light'>Signup</Link>
                              </Nav.Link>


                        </Nav>

                  </Container>
            </Navbar>
      );
}

export default Navmenu;