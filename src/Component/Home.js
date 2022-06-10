import React from "react";
import Cardfunction from "./Cardfunction";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardfunction1 from "./Cardfunction1";
function Home(){
    return(
        <div>
        <Container>
            <Row>
                <Col>
                    <Cardfunction />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home