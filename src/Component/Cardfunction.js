import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cardfunction() {
  return (
<Container>
    <Card className="text-center">
      <Card.Header><h1>A Software-Defined Edge Infrastructure Testbed for Full-stack Data-Driven Wireless Network Applications</h1></Card.Header>
      <Card.Body>
        <Card.Title>Abstract</Card.Title>
        <Card.Text>
        <p>Interdisciplinary research advances often require devices to collect, process, and transfer large scientific datasets over high bandwidth links.  The overarching goal of this project is to build a wireless virtual network testbed at Saint Louis University, in collaboration with Northeastern University, to evaluate network management solutions that integrate the use of machine learning and artificial intelligence with programmable radios and programmable network switches. To evaluate the proposed innovation in computer networking, the cyberinfrastructure will be used to prototype network protocols and systems in support of a few interdisciplinary initiatives on campus.
In particular, this project's contributions will be developed around the integration of learning techniques with network mechanisms such as medium access control, routing, and transport services. First, the team will explore the design and implementation of effective transport and routing protocols that integrate the network stack at different scopes using recent advances in reinforcement learning. Second, novel network architectures will be proposed integrating edge network mechanisms with federated and split learning techniques.
Third, cross-layer distributed learning protocols will be designed to create self-adaptive wireless networks. Such solutions will be tested on campus and on other network testbeds.By combining synergies from the fields of data science and network virtualization protocols and architectures, this work will lay the foundation for further research in adaptive resource management for (wireless) edge computing applications that can improve the quality of life in our society.</p>
        </Card.Text>
      </Card.Body>
    </Card>
</Container>
  );
}

export default Cardfunction;