import Meta from "../components/Meta";
import Speechbubble from "../components/Speechbubble";
import Controls from '../components/Controls';
import Grids from "../components/Grids";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameHouseCanvas from "../components/GameHouseCanvas";

const Dashboard = () => {
  // page content
  const pageTitle = "Dashboard";

  return (
    <div>
      <Meta title={pageTitle} />
      <Row className="align-items-center">
        <Col sm={1}>
          <Grids
            Home={"Home-n.svg"}
            Dashboard={"Control-s.svg"}
            Habits={"Habits-n.svg"}
          />
        </Col>
        <div  style={{backgroundImage: `url("Background.png")`, width:"90%"}}>
        <Col>
            <Row>
                <Controls/>
            </Row>
            <Row>
            <Col sm={10}>
                <Speechbubble/>
                </Col>
                <Col>
                <img src="character-idle1.png" alt=""/>
                </Col>
                <Col>
              <GameHouseCanvas canvasWidth={150} canvasHeight={162} />
            </Col>
            </Row>
            </Col>
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
