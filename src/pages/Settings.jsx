import Meta from "../components/Meta";
import Header from "../components/Header";
import Grids from "../components/Grids";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Account from "../components/Account"

const Settings = () => {
    //page content
    const pageTitle = "Settings";

    return(
        <div>
            <Meta title={pageTitle} />
            <Row>
                <Col sm={1}>
                    <Grids
                        Home={"Home-n.svg"}
                        Dashboard={"Control-n.svg"}
                        Habits={"Habits-n.svg"}
                        Settings={"Settings-s.svg"}
                        Leaderboard={"Leaderboard-n.svg"}
                    />
                </Col>
                <div  style={{backgroundImage: `url("Background.png")`, width:"90%"}}>
                <Col>
                    <Row>
                        <Header
                        Header={"../../SettingsTitleHeader.svg"} width={"98%"}>
                        </Header>
                        <p height="100">

                </p>
                <p height="100">

                </p>
                        
                    </Row>

                    <Row>
                        <Account/> 
                    </Row>
                </Col>
                </div>
            </Row>
        </div>
    );
};

export default Settings;