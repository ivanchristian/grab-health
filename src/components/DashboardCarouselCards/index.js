import { Navbar, Container, Nav, Image, Carousel, Card, Button, Row, Col } from 'react-bootstrap';

function DashboardCarouselCards() {
    return (
        <Carousel>
        <Carousel.Item>
            <Row>
            <Col>
                <Card>
                <Card.Img style={{height:"15rem"}} variant="top" src="https://thumbs.dreamstime.com/b/trending-isolated-premium-red-tag-sign-abstract-illustration-trending-premium-red-tag-sign-123105013.jpg" />
                <Card.Body>
                    <Card.Title>Trending</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img style={{height:"15rem"}} variant="top" src="https://thumbs.dreamstime.com/b/life-insurance-concept-family-under-umbrella-life-insurance-concept-family-under-umbrella-213788643.jpg" />
                <Card.Body>
                    <Card.Title>Life Insurance</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img style={{height:"15rem"}} variant="top" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/14DFE/production/_123720558_gettyimages-1336007263.jpg" />
                <Card.Body>
                    <Card.Title>COVID-19</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img style={{height:"15rem"}} variant="top" src="https://images.healthshots.com/healthshots/en/uploads/2022/05/12104033/pregnancy-1.jpg" />
                <Card.Body>
                    <Card.Title>Kehamilan</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Carousel.Item>
        <Carousel.Item>
            <Row>
            <Col>
                <Card>
                <Card.Img style={{height:"15rem"}} variant="top" src="https://asset.kompas.com/crops/8bk6D8r2onQ_5T3oZPmOQekGhL4=/9x0:978x646/750x500/data/photo/2020/08/30/5f4b1d4ac45c7.jpg" />
                <Card.Body>
                    <Card.Title>Gizi Anak</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img style={{height:"15rem"}} variant="top" src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/12/07054515/perlu-tahu-ini-4-gejala-diabetes-tipe-2-yang-sering-diabaikan-halodoc.jpg" />
                <Card.Body>
                    <Card.Title>Diabetes</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img style={{height:"15rem"}} variant="top" src="https://rm.id/images/berita/med/gandeng-1000-mitra-good-doctor-technology-indonesia-perkuat-layanan-kesehatan_110322.jpg"/>
                <Card.Body>
                    <Card.Title>Berita Good Doctor</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Carousel.Item>
        </Carousel>
    );
}

export default DashboardCarouselCards;