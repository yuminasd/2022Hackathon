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

const App = () => {
  // const [shownHabits, setShownHabits] = useState([
  const shownHabits = useState([
    { text: "All lights off at 10" },
    { text: "I'd rather kill bees 🐝..." },
  ]);

  const contextVals = {
    shownHabits,
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Layout>
    </MainContext.Provider>
  );
};

export default App;
