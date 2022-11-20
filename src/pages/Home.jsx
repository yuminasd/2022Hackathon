import Meta from "../components/Meta";
import Speechbubble from "../components/Speechbubble";
import Header from "../components/Header";
import Grids from "../components/Grids";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameCanvas from "../components/GameCanvas";
import GameHouseCanvas from "../components/GameHouseCanvas";

const Home = () => {
  // page content
  const pageTitle = "Home";

  return (
    <div>
      <Meta title={pageTitle} />
      <Row>
        <Col sm={1}>
          <Grids
            Home={"Home-s.svg"}
            Dashboard={"Control-n.svg"}
            Habits={"Habits-n.svg"}
            Settings={"Settings-n.svg"}
            Leaderboard={"Leaderboard-n.svg"}
          />
        </Col>
        <div style={{backgroundImage: `url("Background.png")`, width:"90%"}}>
        <Col>
          <Row>
            <Header
            Header={"../../HomePageHeader.svg"} width={"101.35%"} />
          </Row>
          <Row>
            {/* <Landscape /> */}
            <GameCanvas canvasWidth={1176} canvasHeight={480} />
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

export default Home;
