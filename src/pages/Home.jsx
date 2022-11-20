import Meta from '../components/Meta';
import Landscape from '../components/Landscape';
import Speechbubble from '../components/Speechbubble';
import Header from '../components/Header';
import Grids from "../components/Grids";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  // page content
  const pageTitle = 'Home'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Row className="align-items-center">
        <Col sm={1}>
          <Grids/>
        </Col>
        <Col>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Landscape/>
          </Row>
          <Row>
            <Col sm={10}>
              <Speechbubble/>
            </Col>
            <Col>
              <img src="character-idle1.png" alt=""/>
            </Col>
          </Row>
        </Col>
      </Row>
      

    </div>
  )
}

export default Home