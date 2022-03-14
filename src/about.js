import React from 'react';
import './about.css';
//import Image from 'react-bootstrap/Image'
import { Card } from 'react-bootstrap';
import { CardGroup} from 'react-bootstrap';

function About () {
    return(
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://www.visitwinstonsalem.com/wp-content/themes/visitws/dist/images/placeholder-2_a327861b.jpg" />
        </Card>
        <Card>
          <Card.Body>
            <Card.Text>
              Established in 2001, Ferrer Drywall has always strived to provide the highest quality of service at competitive prices. No matter what type or size of job our work is fast and efficient. We have proudly served the triad area for over 20 years and look forward to serving many more customers!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>  
    )
}

export default About;