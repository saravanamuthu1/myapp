import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cardfucntiontemp(props) {
  return (
      <Card className='text-center'>
        <Card.Img variant="center" src=" "/>
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
          <Card.Text>
             <p>{props.name}</p>
              <p>{props.position}</p>
              <p>{props.college}</p>
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default Cardfucntiontemp;