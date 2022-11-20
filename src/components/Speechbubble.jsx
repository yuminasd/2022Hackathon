import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainContext from "./context";

const Speechbubble = () => {
  const [shownHabits, setShownHabits] = useContext(MainContext).shownHabits;
  const [shownHabitIndices, setShownHabitIndices] =
    useContext(MainContext).shownHabitIndices;
  const [habits, ...rest] = useContext(MainContext).habits;
  const [gameExternalEvents, setGameExternalEvents] =
    useContext(MainContext).gameExternalEvents;

  const cycleShownHabit = (habitIndex) => {
    const newGameExternalEvents = [...gameExternalEvents];
    newGameExternalEvents.push({
      type: "habitClicked",
      habit: habits[habitIndex],
    });
    setGameExternalEvents(newGameExternalEvents);

    const newHabitIndices = [...shownHabitIndices];
    const otherHabitIndex = shownHabitIndices[(habitIndex + 1) % 2];
    let newIndex = newHabitIndices[habitIndex];
    while (++newIndex == otherHabitIndex) {
      newIndex %= habits.length;
    }
    newIndex %= habits.length;
    newHabitIndices[habitIndex] = newIndex;
    setShownHabitIndices(newHabitIndices);
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
              {habits[shownHabitIndices[0]].text}
            </button>
          </div>
        </Col>
        <Col>
          <div>
            <button onClick={() => cycleShownHabit(1)}>
              {habits[shownHabitIndices[1]].text}
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Speechbubble;
