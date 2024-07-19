import React from 'react';
import './App.css';

const tags = [
  "JavaScript",
  "webdev",
  "Typescript",
  "Next.js",
  "UI/UX",
  "Gatsby",
  "Tailwind",
];

const loopDurations = [
  { duration: '15951ms', direction: 'normal' },
  { duration: '19260ms', direction: 'reverse' },
];

const LoopRow = ({ duration, direction }) => {
  const extendedTags = [...tags, ...tags]; // Duplicate tags for seamless loop

  return (
    <div className="loopRow" style={{ '--duration': duration, '--direction': direction }}>
      <div className="loopObj">
        {extendedTags.map((tag, index) => (
          <div key={index} className="tag">
            <span>#</span> {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {

  return (
    <div className="App">
      <h1>Infinite Scroll Animation</h1>
      <div className="loopContainer">
        {loopDurations.map((loop, index) => (
          <LoopRow
            key={index}
            duration={loop.duration}
            direction={loop.direction}
          />
        ))}
        <div className="fade"></div>
      </div>
    </div>
  );
}

export default App;
