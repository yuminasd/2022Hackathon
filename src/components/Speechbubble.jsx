import { useContext } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainContext from "./context";

const Speechbubble = () => {
  const [shownHabits, setShownHabits] = useContext(MainContext).shownHabits;

  const cycleShownHabit = (habitIndex) => {
    const newShownHabits = [...shownHabits];
    newShownHabits[habitIndex] = { text: "Nevermind, sorry bees 🐝🐝" };
    setShownHabits(newShownHabits);
  };

  return (
    <Container>
      <Row>
        <div>
          <button>
            Did you know you can save 10 Trees this week? Currently it is 20°C,
            automate your thermostat through our smart AI based on real time
            weather data to automatically turn off cooling when not needed!
          </button>
        </div>
      </Row>
      <Row>
        <Col>
          <div>
            {/* <button>All lights off at 10</button> */}
            <button onClick={() => cycleShownHabit(0)}>
              {shownHabits[0].text}
            </button>
          </div>
        </Col>
        <Col>
          <div>
            <button onClick={() => cycleShownHabit(1)}>
              {shownHabits[1].text}
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Speechbubble;
