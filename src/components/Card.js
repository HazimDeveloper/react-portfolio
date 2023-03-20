
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Cards = (props) => {
    const buttons = [
        { for: "Freelance", variant: "primary" },
        { for: "Tournament", variant: "dark"},
        { for: "Personal", variant: "info"},
        // Add more objects for additional buttons as needed
      ];
      const badge = buttons.find((button) => button.for === props.for);

  return (
    <>
         <Col xl={7}   className='mb-5' lg={{order:'first'}}>
         <h4 className='d-inline '>{props.projectName}</h4>
         <Badge bg={ badge ? badge.variant : "info" } className='fw-bold px-2 py-1 text-center mx-3 d-inline' > {props.for}</Badge>      
        <div className='d-flex align-items-center'>
         <p className='mt-4 lh-lg '>{props.desc}</p>
         </div>
    <Button variant='primary' onClick={() => {window.location.href= props.url}}  className='px-4 py-2 text-dark fw-bold border-4 border-outline-primary bg-white text-center'>View Code</Button>
    </Col>

    <Col className='mb-5'  sm={{order:'first'}} xs={{order:'first'}}>
        <Image src={`${process.env.PUBLIC_URL}/img/${props.image}`} className='img-fluid' width={'500px'} alt={props.image} />
    </Col>

    </>
  );
}

export default Cards;