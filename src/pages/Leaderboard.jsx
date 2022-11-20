import Meta from "../components/Meta";
import Header from "../components/Header";
import Grids from "../components/Grids";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stats from "../components/Stats";

const Leaderboard = () => {
    //page content
    const pageTitle = "Leaderboard";

    return(
        <div>
            <Meta title={pageTitle} />
            <Row>
            <Col sm={1}>
                <Grids
                    Home={"Home-n.svg"}
                    Dashboard={"Control-n.svg"}
                    Habits={"Habits-n.svg"}
                    Settings={"Settings-n.svg"}
                    Leaderboard={"Leaderboard-s.svg"}
                />
            </Col>
            <div  style={{backgroundImage: `url("Background.png")`, width:"90%"}}>
            <Col>
                <Row>
                <Header
                Header={"../../LeaderboardHeaderTitle.svg"} width={"98%"}/>
                </Row>
                <Row>
                    <Stats/>             
                </Row>
            </Col>
            </div>
            </Row>
        </div>
        
    );
};

export default Leaderboard;