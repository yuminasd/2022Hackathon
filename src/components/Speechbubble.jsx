import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Speechbubble = () => {
    return(
        <Container>
            <Row>
                <div>
                    <button>
                        Did you know you saved 30 trees?
                    </button>
                </div>

            </Row>
            <Row>
                <Col>
                <div>
                    <button>
                        All lights off at 10
                    </button>
                </div>
                </Col>
                <Col>
                <div>
                    <button>
                        I'd rather kill trees...
                    </button>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Speechbubble