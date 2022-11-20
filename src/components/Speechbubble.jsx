import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Speechbubble = () => {
    return(
        <Container>
            <Row>
                <div>
                    <button>
                    Did you know you can save 10 Trees this week? Currently it is 20°C, automate your thermostat through our smart AI based on real time weather data to automatically turn off cooling when not needed!
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