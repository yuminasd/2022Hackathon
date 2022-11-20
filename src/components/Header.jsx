import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = ({Header}) => {
  return (
    <Container>
      <div style={{height: 135} }>
        <Row>
          <Col>
          <img
              src={Header}
              height="auto"
              width="100%"
            />          
            </Col>
        </Row>
      </div>
      
    </Container>
  )
}

export default Header
