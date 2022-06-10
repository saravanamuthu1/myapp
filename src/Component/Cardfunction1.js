import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cardfunction1() {
  return (
<Container>
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Recent News</Card.Title>
        <Card.Text>
        <ul>
        <li> Oct 2021: Best Paper Award for LIBRA from IEEE IC2E (research track)</li>
     <li>Aug 2021: Our SoK paper “Function-as-a-Service: From An Application Developer’s Perspective” got accepted at JSys.</li>
     <li>Aug 2021: Our work “LIBRA” got accepted at IEEE IC2E’21.</li>
    <li>July 2021: Our works on Federated Learning got accepted at IEEE NetSoft’21 & IEEE CLOUD’21</li>
     <li>Jan 2021: Our journal paper on VNF management got accepted for publication in IEEE TNSM.</li>
    <li>Sep 2020: Paper on optimized cuckoo filters for SDN and NFV applications got accepted for publication in IEEE NFV-SDN.</li>
     <li>Dec 2019: Our paper on configuring serverless functions [COSE] got accepted for publication in IEEE INFOCOM’20.</li>
    </ul> 
        </Card.Text>
      </Card.Body>
    </Card>
</Container>
  );
}

export default Cardfunction1;