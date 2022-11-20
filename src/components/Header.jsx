import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({ Header }) => {
  return (
    <Container>
      <div style={{ height: 135 }}>
        <Row>
          <Col>
            <img src={Header} height="auto" width="100%" />
            <div style={{ position: "absolute" }}>
              <div style={{ right: 100, top: 10 }}>
                <Button variant="primary">Points: 1000</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Header;
