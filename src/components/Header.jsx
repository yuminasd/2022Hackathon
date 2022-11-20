import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Container>
      <div style={{height: 135}}>
        <Row>
          <Col>
            Welcome Home Arnold
          </Col>
          <Col>
            Points: 4000
          </Col>
        </Row>
      </div>
      
    </Container>
  )
}

export default Header
