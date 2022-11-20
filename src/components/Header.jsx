import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainContext from "./context";
import { useEffect, useContext } from "react";

const Header = ({Header, width}) => {
  const masterContext = useContext(MainContext);
  const [lastHabit, ...rest] = useContext(MainContext).lastHabit;
  const [score, setScore] = useContext(MainContext).score;
  const [dailyScore, setDailyScore] = useContext(MainContext).dailyScore;

  // useEffect(() => {
  //   if (!score || !lastHabit) return;
  //   console.log("!!! score", score);
  //   // const [s, setS] = masterContext.score;
  //   const newScore = { value: score.value + lastHabit.score };
  //   setScore(newScore);
  // }, [lastHabit]);

  return (
    <Container>
      <div style={{ height: 135 }}>
        <Row>
          <Col>
            <img src={Header} height="auto" width={width} />
            <div style={{ position: "absolute" }}>
              <div style={{ right: 100, top: 10 }}>
                <Button variant="primary">
                  Points: {score ? score.value : 7300}
                </Button>
                <Button variant="light">
                  +{dailyScore ? dailyScore.value : 30}/day
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Header;
