
import {Container ,Nav , Navbar } from 'react-bootstrap'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './navbar.css'
import { FaSearch} from 'react-icons/fa';
function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed='top'>
      <Container>
        <Navbar.Brand Link="/"><img src={Logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='Link'>Home</Link>
            <Link to="#link"className='Link'>Movie</Link>
            <Link to="#link"className='Link'>Tv show</Link>
            <Link to="#link"className='Link'>Prising</Link>
            <Link to="#link"className='Link'>Blog</Link>
          <Link to="/Contact"className='Link'>Contacts</Link>
          </Nav>
          <div className='nav-right'>
               <div className='search'>
                <span><FaSearch/></span>
               </div>
               <select name="" id="">
                    <option value="en">En</option>
                    <option value="Ar">Ar</option>
               </select>
              <button>Sin In</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;