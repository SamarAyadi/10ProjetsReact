import React from "react";
import "./Liste.css";
import { useTrail, animated } from "react-spring";
import Card from "../../Components/Card/Card";
import { v4 as uuidv4 } from "uuid";

export default function Liste() {
  const trail = useTrail(9, {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  console.log(trail);

  return (
    <div className="list-container">
      {trail.map((cardStyle, index) => {
        return (
          <animated.div key={uuidv4()} style={cardStyle}>
            <Card />
          </animated.div>
        );
      })}
    </div>
  );
}
