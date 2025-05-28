import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PendulumDemo = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 400,
        height: 300,
        wireframes: false,
        background: '#f0f0f0',
      },
    });

    // create a pendulum
    const ball = Matter.Bodies.circle(200, 200, 20, { density: 0.004 });
    const constraint = Matter.Constraint.create({
      pointA: { x: 200, y: 50 },
      bodyB: ball,
      stiffness: 1,
      length: 150,
    });

    Matter.World.add(engine.world, [ball, constraint]);
    Matter.Engine.run(engine);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default PendulumDemo;
