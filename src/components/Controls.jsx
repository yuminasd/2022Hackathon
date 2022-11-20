import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Controls = () => {
    return(
        <Container>
            <Row>
                <div>
                    <img src="Rooms.png" alt="" width="98%"/>
                </div>
                <div>
                    <img src="Devices.png" alt="" width="98%"/>
                </div>
            </Row>
            <Row>
                <Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Col>
                <Col>

                </Col>
                <Col>
                    <div>

                    </div>
                </Col>
            </Row>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            <Row>

            </Row>
        </Container>
    )
}

export default Controls