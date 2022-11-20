import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Controls = () => {
    return(
        <Container>
            <Row>
                <div>
                <img src="Home_Controls_Title.png" alt="" width="82%"/>
                </div>
            </Row>
            <Row>
                <div>
                    <img src="Rooms.png" alt="" width="82%"/>
                </div>
            </Row>
            <Row>
                <Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <div>
                            <button>

                            </button>
                        </div>
                        <div>
                            <button>

                            </button>
                        </div>
                    </Col>
                </Col>
                <Col>
                    <div>
                        Fan goes here
                    </div>
                </Col>
                <Col>
                    <div>

                    </div>
                </Col>
            </Row>
                <Col>
                </Col>
                <Col>
                    <div>
                        Add Device
                    </div>
                </Col>
                <Col>
                </Col>
            <Row>

            </Row>
        </Container>
    )
}

export default Controls