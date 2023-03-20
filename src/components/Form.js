
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Forms = (props) => {
  return (
    <Form ref={props.form} onSubmit={props.submit} > 
      <Form.Group className="mb-3 text-white" controlId="Name">
        <Form.Label>Your Name : </Form.Label>
        <Form.Control type="text" id="name" placeholder="Enter Name" name="form_name" required/>
        
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="Email">
        <Form.Label>Your Email : </Form.Label>
        <Form.Control type="email" id="email" placeholder="Enter Email" name="form_email" required />
      </Form.Group>
      <Form.Group className="mb-3 text-white" controlId="Message">
      <Form.Label>Message</Form.Label>
       
         <Form.Control as="textarea" id="message" placeholder="Leave a message here" className='mb-3' name="message" required />
      </Form.Group>
  
    <p className='text-success' id="text-success" style={{display: "none"}}>Email Send Successfully</p>
      <Button variant="info" className='rounded-5 px-5 mt-4' id="btn-form" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;