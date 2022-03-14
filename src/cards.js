import React from "react";
import './cards.css';
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Cards () {
    return(
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Card.Body>
            <Card.Title>Drywall</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://images.pexels.com/photos/5691611/pexels-photo-5691611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Card.Body>
            <Card.Title>Paint</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://images.pexels.com/photos/4947007/pexels-photo-4947007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <Card.Body>
            <Card.Title>Damage Repair</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup> 
    )
}

export default Cards;