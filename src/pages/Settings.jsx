import Meta from "../components/Meta";
import Header from "../components/Header";
import Grids from "../components/Grids";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Settings = () => {
    //page content
    const pageTitle = "Settings";

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
            <Col>
                <img src="Accounts.png" alt="" width="98%"/>
            </Col>
            </Row>
        </div>
        
    );
};

export default Settings;