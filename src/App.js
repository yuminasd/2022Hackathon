import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./Fonts/Minecraft.ttf";
import MainContext from "./components/context";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Settings from "./pages/Settings";
import Leaderboard from "./pages/Leaderboard";

const App = () => {
  // const [shownHabits, setShownHabits] = useState([
  const shownHabits = useState([
    { text: "All lights off at 10" },
    { text: "Keep your home slightly cooler and wear more layers" },
  ]);

  const shownHabitIndices = useState([0, 1]);

  const habits = useState([
    { text: "All lights off at 10", score: 10 },
    { text: "Keep your home slightly cooler and wear more layers", score: 50 },
    { text: "Avoid placing electronics near a thermostat", score: 40 },
    {
      text: "Have set meal times to avoid reheating food after it is cooked",
      score: 20,
    },
    { text: "Close your blinds during hot sunny days", score: 20 },
    {
      text: "Put a smart switch on your car's block heater to only turn on 5 hours before it is needed",
      score: 50,
    },
    {
      text: "Charge your electric car at night when power is cheaper",
      score: 50,
    },
    {
      text: "Keep your thermostat set to lower temperatures while you sleep, and set the temperature to raise back up to normal levels at 5am",
      score: 60,
    },
  ]);

  const gameExternalEvents = useState([]);

  const contextVals = {
    shownHabits,
    shownHabitIndices,
    habits,
    gameExternalEvents,
  };

  return (
    <MainContext.Provider value={contextVals}>
      <Layout>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Habits" element={<Habits />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Layout>
    </MainContext.Provider>
  );
};

export default App;
