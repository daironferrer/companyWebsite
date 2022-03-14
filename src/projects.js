import React from "react";
import './projects.css';
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
//import { Row } from "react-bootstrap";
//import { Col } from "react-bootstrap";

const Projects= () => {
    return(
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Card>
             <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="https://images.pexels.com/photos/994164/pexels-photo-994164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Card>
        </CardGroup>
    )
}

export default Projects;