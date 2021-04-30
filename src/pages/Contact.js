import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import '../App.css'
function Contact() {
   return (
      <>
      <div className="form_head">
      <h3> Hire or Contact Me</h3>
         <p>Invite me to speak at your conference or work for you</p>
      </div>
      <div className="formStyle">
         <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect2">
               <Form.Label>  Your Name? </Form.Label>
               <Form.Control placeholder="First name" />
               {/* <Form.Control as="select" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
               </Form.Control> */}
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
               <Form.Label>Your Query ...</Form.Label>
               <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>
            <Button variant="primary">SEND</Button>{' '}
      </div>
   </>
   )
}

export default Contact
