import Meta from '../components/Meta'
import Grids from '../components/Grids'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import Advice from '../components/Advice';

const Habits = () => {
  // page content
  const pageTitle = 'Habits'


  return (
    <div>
      <Meta title={pageTitle}/>
      <Row>
        <Col sm={1}>
            <Grids Home={"Home-n.svg"} Dashboard={"Control-n.svg"} Habits={"Habits-s.svg"} Settings={"Settings-n.svg"} Leaderboard={"Leaderboard-n.svg"}/>
        </Col>
        <div  style={{backgroundImage: `url("Background.png")`, width:"90%"}}>
        <Col>
            <Row>
                <Header
                Header={"../../HabitPageHeader.svg"} width={"98%"}>
                </Header>
            </Row>
            <Row>
            
                    <Advice/>
            
            </Row>
        </Col>
        </div>
        </Row>
    </div>
  )
}

export default Habits