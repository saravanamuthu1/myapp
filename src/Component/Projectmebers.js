import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Cardfucntiontemp from "./Cardfunctiontemp";
function Projectmembers(){
    return(
    <div>
    <Container>
        <Row>
        <Col>
        <Cardfucntiontemp title = "Faculty" name ="Abraham Matta" position ="Lead Project Investigator " college= "Boston University"/>
        </Col>
        <Col>
        <Cardfucntiontemp title = "Faculty" name ="Flavio Esposito" position ="Project Investigator" college= "Saint louis university"/>
        </Col>
    </Row>
    </Container>
    <br></br>
    <Container>
    <Row>
    <Col>
    <Cardfucntiontemp title = "Collaborators" name ="Nabeel Akhtar " position ="Akamai Technologies" />
    </Col>
    <Col>
    <Cardfucntiontemp title = "Collaborators" name ="Vatche Isahagian (formerly Ishakian)" position ="IBM Research AI, Boston"/>
    </Col>
    <Col>
    <Cardfucntiontemp title = "Collaborators" name ="Flavio Esposito" position ="Project Investigator" college= "Saint louis university"/>
    </Col>
</Row>
</Container>
<br></br>
<Container>
    <Row>
    <Col>
    <Cardfucntiontemp title = "Phd students" name ="Flavio Esposito" position ="Project Investigator" college= "Saint louis university"/>
    </Col>
    <Col>
    <Cardfucntiontemp title = "Phd students" name ="Flavio Esposito" position ="Project Investigator" college= "Saint louis university"/>
    </Col>
    <Col>
    <Cardfucntiontemp title = "Phd students" name ="Flavio Esposito" position ="Project Investigator" college= "Saint louis university"/>
    </Col>
    <Col>
    <Cardfucntiontemp title = "Phd students" name ="Flavio Esposito" position ="Project Investigator" college= "Saint louis university"/>
    </Col>
</Row>
</Container>
<br></br>
<Container>
    <Row>
    <Col>
    <Cardfucntiontemp title = "Visiting students" name ="Flavio Esposito" position ="Project Investigator" college= "Saint louis university"/>
    </Col>
    </Row>
</Container>
</div>
  );
}



export default Projectmembers