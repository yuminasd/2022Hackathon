import React, { useState, useEffect, useRef, useContext } from "react";
import Game from "../gameEntities/Game";
import MainContext from "./context";

function GameCanvas({ canvasWidth, canvasHeight }) {
  const [game, setGame] = useState();
  const canvasRef = useRef();
  // const [shownHabits, ...rest] = useContext(MainContext).shownHabits;
  const [gameExternalEvents, setGameExternalEvents] =
    useContext(MainContext).gameExternalEvents;

  // Main logic loop for canvas
  const draw = (ctx, tickCount) => {
    if (!game) return;
    game.tick(ctx, tickCount);
  };

  useEffect(() => {
    // useEffect is triggered after first render, so canvasRef.current will always be initialized
    setGame(new Game(canvasRef.current));
  }, []);

  // Render looping logic on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let tickCount = 0;
    let animationFrameId;

    const render = () => {
      ctx.canvas.width = canvasWidth;
      ctx.canvas.height = canvasHeight;
      draw(ctx, tickCount);
      tickCount++;
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  useEffect(() => {
    if (!gameExternalEvents.length || !game) return;
    gameExternalEvents.forEach((e) => game.queueExternalEvent(e));
    setGameExternalEvents([]);
  }, [gameExternalEvents]);

  return (
    <div style={{ borderRadius: 10, overflow: "hidden" }}>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
}

export default GameCanvas;
