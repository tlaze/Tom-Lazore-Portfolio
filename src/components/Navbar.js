import {Navbar, Nav} from 'react-bootstrap'
import React from 'react';
import myResume from '../assets/pdf/Thomas_Lazore_Resume.pdf';

function NavBar({ currentPage, handlePageChange }) {
    const styles = {
        navStyle:{
            backgroundColor: '#d2dbde',
        },
        brandStyle:{
            color: '#051f40',
            fontSize: '2em',
            fontWeight: 'bold',
        },
        linkStyle:{
            marginRight: '25px',
            marginLeft: '25px',
            fontSize: '16px',
        }
    }
    return(
        <Navbar className="navbar-fixed-top container-fluid" expand="md" style={styles.navStyle}>
            <Navbar.Brand className="brand ms-1" style={styles.brandStyle}>Tom Lazore</Navbar.Brand>
            <Navbar.Toggle className="me-1" />
            <Navbar.Collapse className="justify-content-center">
                <Nav>
                    <Nav.Link style={styles.linkStyle}  className={ currentPage === 'about' ? 'nav-link active' : 'nav-link' } onClick={() => handlePageChange('about')}>About Me</Nav.Link>
                    <Nav.Link style={styles.linkStyle}  className={currentPage === 'projects' ? 'nav=link active' : 'nav-link' } onClick={() => handlePageChange('projects')}>Projects</Nav.Link>
                    <Nav.Link style={styles.linkStyle}  className={currentPage === 'contact' ? 'nav=link active' : 'nav-link' } onClick={() => handlePageChange('contact')}>Contact Me</Nav.Link>
                    <Nav.Link style={styles.linkStyle}  href={myResume} download="Thomas_Lazore_Resume" rel="noreferrer">Resume</Nav.Link>            
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;