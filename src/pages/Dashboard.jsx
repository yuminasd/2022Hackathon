import Meta from "../components/Meta";
import Speechbubble from "../components/Speechbubble";
import Controls from '../components/Controls';
import Header from '../components/Header';
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
            Settings={"Settings-n.svg"}
          />
        </Col>
        <div  style={{backgroundImage: `url("Background.png")`, width:"90%"}}>
        <Col>
          <Row>
            <Header 
            Header={"../../ControlPageHeader.svg"}
            />
          </Row>
            <Row>
                <Controls/>
            </Row>
          <Row>
            <Col sm={9}>
              <Speechbubble />
            </Col>
            <Col>
              <GameHouseCanvas canvasWidth={240} canvasHeight={290} />
            </Col>
            </Row>
            </Col>
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
