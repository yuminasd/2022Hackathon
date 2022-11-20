import React, { useState, useEffect, useRef } from "react";
import Game from "../gameEntities/Game";

function GameCanvas(props) {
  const [game, setGame] = useState();

  const canvasRef = useRef();

  // Main logic loop for canvas
  const draw = (ctx, tickCount) => {
    if (!game) return;
    game.tick(ctx, tickCount);
  };

  // Set canvas to be fullscreen
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

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
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      draw(ctx, tickCount);
      tickCount++;
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <div style={{ position: "fixed", left: 0, top: 0 }}>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
}

export default GameCanvas;
