import Meta from "../components/Meta";
import Header from "../components/Header";
import Grids from "../components/Grids";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Leaderboard = () => {
    //page content
    const pageTitle = "Leaderboard";

    return(
        <div>
            <Meta title={pageTitle} />
            <Row className="align-items-center">
            <Col sm={1}>
                <Grids
                    Home={"Home-n.svg"}
                    Dashboard={"Control-n.svg"}
                    Habits={"Habits-n.svg"}
                    Settings={"Settings-s.svg"}
                />
            </Col>
            <div  style={{backgroundImage: `url("Background.png")`, width:"90%"}}>
            <Col>
                <img src="Leaderboard.png" alt="" width="98%"/>             
            </Col>
            </div>
            </Row>
        </div>
        
    );
};

export default Leaderboard;