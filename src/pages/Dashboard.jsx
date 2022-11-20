import Meta from "../components/Meta";
import Speechbubble from "../components/Speechbubble";
import Header from "../components/Header";
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
        <Col>
          <Row>
            <Header />
          </Row>
          <Row>Something</Row>
          <Row>
            <Col sm={9}>
              <Speechbubble />
            </Col>
            <Col>
              <GameHouseCanvas canvasWidth={240} canvasHeight={290} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
