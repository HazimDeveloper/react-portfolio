import React,{ useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from './components/Card';
import Forms from './components/Form';
import emailjs from '@emailjs/browser';

const App = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
    emailjs.sendForm('service_ddhufso', 'template_69wu4el', form.current, 'y51xOYC0d_o8wcYLN')
      .then((result) => {
        console.log(result)
        document.getElementById("text-success").style.display = 'block'
        document.getElementById("btn-form").style.display = 'none'
        document.getElementById("name").value = ''
        document.getElementById("email").value = ''
        document.getElementById("message").value = ''
          // show the user a success message
      }, (error) => {
        // console.log(error)
          // show the user an error
      });
  };
  return (
<>
    <Navbar bg="dark" sticky='top' expand='lg' variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {' '}
           <b> Muhammad Hazim</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

    <Container fluid className='bg-dark' style={{paddingBottom: '13%'}}>
      <Row className='text-start mx-auto d-flex' style={{paddingTop:'13%'}} >
      <Col xl={5} lg={6} md={{order: 'second'}} sm={{order: 'first'}} className='text-center' >
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} className='img-fluid rounded-5 mb-5 '  alt="logo" width={'300px'} />        
        </Col>

        <Col xl={7}  lg={6} md={{order: 'first'}} sm={{order: 'second'}}  xs={{order: 'second'}} className='text-white justify-content-center align-items-center' >         
                <div className='fs-4 mb-3'>👋Hi! I am </div>
                <h1 className='text-primary mb-3'>Muhamad Hazim</h1>
                <h4 className='mb-3'>A <i> <b> Freelance Web Developer</b> </i>with passion to help people</h4>
                <Button variant="primary" className='rounded-5 px-5 py-2 mt-3 fw-bold' onClick={() => {window.location.href="mailto:hazim4128@gmail.com}"}}>Hire Me</Button>
                <a className='text-white d-block text-decoration-none mt-3' href={`${process.env.PUBLIC_URL}/file/Resume_MUHAMMAD_HAZIM.pdf`}>Resume 🔗</a>
        </Col>
       
        </Row>
        </Container>

        <Container className='mt-4 mb-4' id="project">
<div className='mb-5 mt-5'>
        <h2><span className='text-primary'>Projects</span> that I did</h2>
    </div>
    <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Aroma Kitchen"  image="aromakitchen.png" for="Freelance" desc="Aromakitchen is a website focused on providing information, tips, and recipes related to aromatherapy and essential oils. It aims to promote natural and holistic approaches to health and wellness." url="https://github.com/HazimDeveloper/restaurant-website" />
        </Row>
    <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Voting Online System"  image="voting_system.png" for="Freelance" desc="Online voting is a secure and accessible digital platform that allows voters to cast their ballots remotely, increasing participation and engagement." url="https://github.com/HazimDeveloper/voting-online-system" />
        </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Aircond Design" for="Freelance" desc="The air conditioning website design project is a website that showcases air conditioning and HVAC design services. It was created using HTML, CSS, and JavaScript, and includes information about services, pricing, and contact details. It demonstrates the designer's skills in web development and knowledge of air conditioning design." image="aircond-design.png" url="https://github.com/HazimDeveloper/Aircond" />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Computer Lab Reservation" for="Freelance" desc="A computer lab reservation website is a platform for reserving computer stations in a lab. It offers a calendar-based reservation system and displays lab details such as availability, equipment and software installed." image="computerlabreservation.png" url="https://github.com/HazimDeveloper/Computer-Lab-Reservation" />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Ilokap-app" for="Freelance"  image="ilokal-app.png" desc="A computer hardware website provides information on computer components such as CPUs, GPUs, motherboards, and more. It may also sell computer parts and accessories." url="https://github.com/HazimDeveloper/IILokal-App" />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Kewpa" for="Freelance" desc="The 'KEWPA' project involves creating a program using JavaScript that generates PDF and Excel files with names. The project may involve using JavaScript libraries such as jsPDF or SheetJS to create and manipulate PDF and Excel files. The generated files could be used for various purposes, such as data management or record-keeping." image="kewpa.png" url="https://github.com/HazimDeveloper/kewpa"/>
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Mosque Website" for="Freelance" desc="A mosque management system is a software platform that helps manage the operations of a mosque, such as prayer times, donations, events, and membership. The system may include features such as attendance tracking, financial reporting, and communication tools." image="masjid_management_system.png" url="https://github.com/HazimDeveloper/mosque-website" />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Tuition Website" for="Freelance" desc="A tuition management website helps manage tuition-related tasks, such as enrollment, scheduling, billing, and payment tracking. It may include features such as student profiles, class schedules, payment portals, and automated notifications." image="tuitionmanagementsystem.png" url="https://github.com/HazimDeveloper/tuition-website" />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="UITM Volunteering System" for="Freelance" desc="The UiTM Volunteering System is a platform that connects students with volunteer opportunities. It allows students to browse and sign up for volunteer events and tracks their involvement and hours." image="uitm volunteering system.png" url="https://github.com/HazimDeveloper/uitm-volunteering-system"  />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Cookie Ecommerce" for="Freelance" desc="A cookie e-commerce website sells cookies and related products online. It may include features such as an online store, product catalog, shopping cart, payment processing, and delivery options." image="cookie.png" url="https://github.com/HazimDeveloper/cookie" />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Plantation RunCloud " for="Tournament" desc="A plantation website with a main function of donation allows users to make contributions to support the plantation's operations, sustainability, or social impact initiatives through a donation platform on the website." image="plantationruncloud.png" url="https://github.com/HazimDeveloper/plantation-runcloud" />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Fight The Dice Game" for="Personal" desc="In the fight the dice game, players take turns rolling a six-sided die. The player with the highest number at the end of the game wins. To keep score, players can write down their numbers after each roll or use a scorecard. The game can be played with any number of players and any number of rounds. It's a simple and fun way to pass the time with friends and family. " image="dice.png" url=" https://github.com/HazimDeveloper/Fight-The-Dice.git" />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Drum Kit Game" for="Personal" desc="The drum kit game is a keyboard-based drum simulator. Pressing the 'w', 'a', 's', 'd', 'j', 'k', or 'l keys produces different drum sounds like snare, kick, hi-hat or cymbal crash. Users can create rhythm patterns and beats with various sound combinations, simulating playing an actual drum kit. " image="drum.png" url=" https://github.com/HazimDeveloper/Drumkit.git" />
      </Row>
      <Row style={{marginBottom:" 150px",alignItems:"center",marginTop: '150px'}}> 
        <Card projectName="Simon Game" for="Personal" desc="Simon Game is a popular memory game where players must remember the sequence of flashing lights and sounds. The Simon Game website offers a virtual version of the game for free, with different difficulty levels and modes." image="simon.png" url=" https://github.com/HazimDeveloper/TheSimonGame.git" />
      </Row>
</Container>

<Container fluid className="bg-dark p-5" id="contact">
  <Row >
  <Col ></Col>
  <Col xl={6} md={12} style={{paddingBottom: '60px'}} className='mt-5'>
    <h4 className="text-white mb-5">Contact Me!!</h4>
    <Forms form={form} submit={sendEmail} />
  </Col>
  <Col ></Col>
  </Row>
</Container>
        </>

  );
}

export default App;
