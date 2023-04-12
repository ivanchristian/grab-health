import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import logo from '../../../public/Logo.png';
import Image from 'next/image';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Grab Health</title>
      </Head>
      <Navbar bg="success" expand="lg" style={{height:"6rem"}}>
        <Container>
          <Navbar.Brand href="/" style={{color:"white"}}><Image src={logo} alt="Logo" width={40} height={40} /> &nbsp;Powered by Good Doctor</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="/notification" style={{color:"white"}}>Notification</Nav.Link>
            <Nav.Link href="/profle" style={{color:"white"}}>Profile</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </>
  );
};

export default DashboardLayout;
