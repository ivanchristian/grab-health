import { Navbar, Container, Nav, Image, Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import cardData from '@/data/cards'

var menuData = [
    {
      title: "Konsultasi",
      description: "Chat dengan dokter kami",
      image: "https://img.freepik.com/free-icon/doctor_318-201540.jpg",
    },
    {
      title: "Toko Kesehatan",
      description: "Beli obat dan produk lainnya",
      image: "https://cdn-icons-png.flaticon.com/512/1533/1533792.png",
    },
    {
      title: "Janji Medis",
      description: "Tes COVID-19, vaksinasi, tes lab",
      image: "https://cdn-icons-png.flaticon.com/512/4625/4625853.png",
    },
  ];

  var doctorData = [
    {
      title: "Dokter Umum",
      image: "https://cdn-icons-png.flaticon.com/512/2991/2991300.png",
    },
    {
      title: "Dokter Spesialis Kulit & Kelamin",
      image: "https://cdn-icons-png.flaticon.com/512/843/843293.png",
    },
    {
      title: "Klinik Kesehatan Perempuan",
      image: "https://cdn-icons-png.flaticon.com/512/1912/1912304.png",
    },
    {
      title: "Klinik Lawan COVID-19",
      image: "https://cdn-icons-png.flaticon.com/512/3461/3461640.png",
    },
  ];

  var productData = [
    {
      title: "Vitamin",
      description: "Vitamin C, Vitamin D, Multivitamin",
      image: "https://cdn-icons-png.flaticon.com/512/3047/3047613.png",
    },
    {
      title: "Batuk & Flu",
      description: "Batuk berdahak, kering & Flu",
      image: "https://static.thenounproject.com/png/3381236-200.png",
    },
    {
      title: "Perut",
      description: "Obat maag, diare, mual, konstipasi",
      image: "https://img.freepik.com/premium-vector/stomach-with-pain-icon_121111-717.jpg",
    },
    {
      title: "Anti Infeksi",
      description: "Antibiotikm anti virus, anti jamur",
      image: "https://previews.123rf.com/images/microone/microone1710/microone171000158/87466985-stop-microbes-cartoon-vector-illustration-anti-bacteria-symbol-and-protection-infection.jpg",
    },
  ];

  var recommendData = [
    {
        id : 1,
      title: "Gunakan benefit asuransimu",
      description: "Untuk konsultasi 24/7 di Good Doctor",
      image: "https://cdn-icons-png.flaticon.com/512/4599/4599163.png",
    },
    {
        id : 2,
      title: "Puasa aman dan nyaman",
      description: "Dengan konsultasi 25RB bersama dokter pilihanmu",
      image: "https://cdn-icons-png.flaticon.com/512/3858/3858794.png",
    },
    {
        id : 3,
      title: "Bumil masih bisa puasa?",
      description: "Tanya dokter spesialis di Good Doctor!",
      image: "https://cdn-icons-png.flaticon.com/512/4605/4605376.png",
    },
    {
        id : 4,
      title: "Si kecil siap puasa!",
      description: "Coba konsultasi dulu ke dokter spesialis anak yuk!",
      image: "https://www.pngitem.com/pimgs/m/57-573173_child-icon-symbol-vector-icons-child-hd-png.png",
    },
  ];

function DashboardCards() {
    return (
      <div className="d-flex justify-content-center mt-4">
        {/* <Card style={{ width: '18rem' }} className="mx-3">
          <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Card+Image+1" />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien vel urna euismod congue.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="mx-3">
          <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Card+Image+2" />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien vel urna euismod congue.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="mx-3">
          <Card.Img variant="top" src="https://via.placeholder.com/300x200?text=Card+Image+3" />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien vel urna euismod congue.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
        {menuData && menuData.map((card) => (
            <>
            <Card style={{ width: '18rem' }} className="mx-3">
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.description}
                    </Card.Text>
                    <Button variant="success">Go Here</Button>
                </Card.Body>
            </Card>
            </>
        ))}
      </div>
    );
  }

  export function DashboardDoctorCards() {
    return (
      <div className="d-flex justify-content-center mt-4">
        {doctorData && doctorData.map((doc) => (
            <>
            <Card style={{ width: '18rem' }} className="mx-3">
                <Card.Img variant="top" src={doc.image} />
                <Card.Body>
                    <Card.Title>{doc.title}</Card.Title>
                </Card.Body>
            </Card>
            </>
        ))}
      </div>
    );
  }

  export function DashboardProductCards() {
    return (
      <div className="d-flex justify-content-center mt-4">
        {productData && productData.map((prod) => (
            <>
            <Card style={{ width: '18rem' }} className="mx-3">
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            </>
        ))}
      </div>
    );
  }

  export function DashboardRecommendCards(){
    return (
        <Row>
        <Col md={6}>
          <Row>
            {recommendData.slice(0, 2).map((rec) => (
              <Col key={rec.id}>
                <Card style={{ width: '18rem', height:'27rem', margin: '20px 0'}}>
                  <Card.Img variant="top" src={rec.image} />
                  <Card.Body>
                    <Card.Title>{rec.title}</Card.Title>
                    <Card.Text>{rec.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            {recommendData.slice(2, 4).map((rec) => (
              <Col key={rec.id}>
                <Card style={{ width: '18rem', height:'27rem', margin: '20px 0'}}>
                  <Card.Img variant="top" src={rec.image} />
                  <Card.Body>
                    <Card.Title>{rec.title}</Card.Title>
                    <Card.Text>{rec.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    );
  }

  export default DashboardCards;