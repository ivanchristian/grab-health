import { Navbar, Container, Nav, Image, Carousel } from 'react-bootstrap';
import { useState } from 'react';


function DashboardCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d2mhoisd9uf1g8.cloudfront.net/Indonesia/1Raiz-GoodDoctor-HeaderBlog.jpg"
            alt="First slide"
            height={700}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://indodana-web.imgix.net/assets/promo/6-Banner-Promo-Cermati-INDOGD_APPS_1320x600.jpg"
            alt="Second slide"
            height={700}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://doku.promo/bl-content/uploads/pages/2aa17f40aab08487d93e6b4fae559ace/jenius-good-doctor.jpeg"
            alt="Third slide"
            height={700}
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  
  export default DashboardCarousel;