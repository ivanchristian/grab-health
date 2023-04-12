import DashboardCarousel from '@/components/DashboardCarousel';
import DashboardLayout from '../components/DashboardLayout';
import Container from 'react-bootstrap/Container';
import DashboardCards, { DashboardDoctorCards, DashboardProductCards, DashboardRecommendCards } from '@/components/DashboardCards';
import DashboardFooter from '@/components/DashboardFooter';
import DashboardCarouselCards from '@/components/DashboardCarouselCards';
import Image from 'next/image';
import { Row } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Container className="text-center">
        <br></br><br></br>
        <h4>Hello Ivan Christian,</h4><br></br>
        <h5>how can we help you today?</h5>
        <br></br>
        <DashboardCards />
        <br></br><br></br>
        <div className='d-flex text-center justify-content-center'>
          <h5>Official partner of</h5>&nbsp;&nbsp;&nbsp;
          <Image style={{marginTop:"-26px"}} src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_of_the_Ministry_of_Health_of_the_Republic_of_Indonesia.svg" alt="KKRI" width={80} height={80} /> 
        </div><br></br>
        <DashboardCarousel />
        <br></br><br></br>
        <h4>Dokter Berdasarkan Spesialisasi</h4>
        <br></br>
        <DashboardDoctorCards />
        <br></br><br></br>
        <h4>Produk Berdasarkan Kategori</h4>
        <br></br>
        <DashboardProductCards />
        <br></br><br></br>
        <h4>Cek Artikel Kesehatan Kami</h4>
        <br></br><br></br>
        <DashboardCarouselCards />
        <br></br><br></br>
        <h4>Rekomendasi Untukmu</h4>
        <br></br>
        <Row xs={1} md={2} className="justify-content-center">
            <DashboardRecommendCards />
        </Row>
        <br></br><br></br>
      </Container>
      <DashboardFooter />
    </DashboardLayout>
  );
};

export default Dashboard;
