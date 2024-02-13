import React from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";

function App() {
  const props = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(-50px)" },
    config: { duration: 1000 },
  });

  return (
    <div className="App">
      <header className="App-header">
        <animated.h1 style={props}>Happy Valentine's Day!</animated.h1>
        <animated.p style={props}>You are the love of my life!</animated.p>
        <animated.p style={props}>I cherish every moment with you!</animated.p>
      </header>
      <div className="gif">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzRpbXk4b2kxbmRybXQxOGRsNnNsZ3lka2owcng5YzZ2aXF1M3BuciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ifB1v1W3Db0GIW7uTA/giphy.gif "
          alt="loading..."
        />
      </div>
    </div>
  );
}

export default App;
