import Link from 'next/link';
import { Navbar, Container, Nav, Image, Carousel, Card, Button, Row, Col } from 'react-bootstrap';

function DashboardFooter() {
  return (
    <footer className="mt-auto text-light py-3" style={{backgroundColor:"#404040"}}>
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start my-3 my-md-3">
            <Link href="/termsandpolicies" style={{color:"white"}}>Terms and Policies</Link>
          </Col>
          <Col md={4} className="text-center my-3 my-md-3">
            <h5>© Grab 2010 - 2023</h5>
          </Col>
          <Col md={4} className="text-center text-md-end my-md-3">
          <Link href="https://www.grab.com/id/en/" style={{color:"white"}}>Visit Us</Link>
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Link href="/"><i className="fab fa-facebook fa-lg"></i></Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
  export default DashboardFooter;
  