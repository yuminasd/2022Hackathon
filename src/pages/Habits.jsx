import Meta from '../components/Meta'
import Grids from '../components/Grids'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Habits = () => {
  // page content
  const pageTitle = 'Habits'


  return (
    <div>
      <Meta title={pageTitle}/>
      <Row className="align-items-center">
        <Col sm={1}>
            <Grids Home={"Home-n.svg"} Dashboard={"Control-n.svg"} Habits={"Habits-s.svg"} Settings={"Settings-n.svg"}/>
        </Col>
        <Col>
        <div  style={{backgroundImage: `url("Background.png")`, width:"90%"}}>
                <img src="Habits.png" alt="" width="98%"/>
        </div>
        </Col>
        </Row>
    </div>
  )
}

export default Habits