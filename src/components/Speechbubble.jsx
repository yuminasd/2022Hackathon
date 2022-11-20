import { useContext, useState } from "react";
import { Container, Button } from "react-bootstrap";
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
  const [lastHabit, setLastHabit] = useContext(MainContext).lastHabit;
  const [score, setScore] = useContext(MainContext).score;
  const [dailyScore, setDailyScore] = useContext(MainContext).dailyScore;

  const cycleShownHabit = (habitIndex) => {
    setLastHabit(habits[habitIndex]);
    setScore({ value: score.value + habits[habitIndex].score });
    setDailyScore({ value: dailyScore.value + habits[habitIndex].score });

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
      <Row className="mt-4">
        <div
          className="bg-light"
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <p>
            Did you know you can save 10 Trees this week? Currently it is 20°C,
            automate your thermostat through our smart AI based on real time
            weather data to automatically turn off cooling when not needed!
          </p>
        </div>
      </Row>
      <Row className="mt-4">
        <Col>
          <div>
            {/* <button>All lights off at 10</button> */}
            <Button
              variant="light"
              className=" p-4"
              style={{
                minWidth: 200,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
              onClick={() => cycleShownHabit(0)}
            >
              {habits[shownHabitIndices[0]].text}
            </Button>
          </div>
        </Col>
        <Col>
          <div>
            <Button
              variant="light"
              className=" p-4"
              style={{
                minWidth: 200,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
              onClick={() => cycleShownHabit(1)}
            >
              {habits[shownHabitIndices[1]].text}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Speechbubble;
