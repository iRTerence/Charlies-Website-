import React from 'react'
import styles from './PrimaryNav.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export default function PrimaryNav() {
  return (
<Navbar collapseOnSelect expand="lg" className={styles.mainNav}>

        <Link to="/" className={styles.brand}>
            
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={faBars} color="white"  />;

        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className={styles.hamburgerIcon}>
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{paddingLeft: '22px', paddingRight: '22px'}}>Listings</Nav.Link>
            <Nav.Link href="#deets" style={{paddingLeft: '22px',  paddingRight: '22px'}}>Buyers</Nav.Link>


            <NavDropdown title="Client tools" id="collasible-nav-dropdown" className={styles.links}>
              <NavDropdown.Item href="#action/3.1" className={styles.dropdownItem}>My Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className={styles.dropdownItem}>
                My Comparisons
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className={styles.dropdownItem}>My Favourites</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className={styles.dropdownItem}>
                My Saved Searches
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About" id="collasible-nav-dropdown" className={`${styles.links}`}>
              <NavDropdown.Item><Link to="/about" className={styles.dropdownItem}>About Sezlik.com </Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className={styles.dropdownItem}>
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
