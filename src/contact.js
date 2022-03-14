import React from "react";
import './contact.css';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Contact = () => {
    return (
        <div className="contactForm">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="First and Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="phoneNumber" placeholder="(123) 456-7890" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;