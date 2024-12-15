import React from 'react';
import styles from './Circle.module.css';

const Circle = () => {
  const circles = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div className={styles.container}>
      {circles.map((circle) => {
        const randomTop = Math.random() * 100; // Random start position (0-100vh)
        const randomLeft = Math.random() * 100; // Random start position (0-100vw)
        const randomDuration = 5 + Math.random() * 5; // Random duration (5-10s)
        const randomDelay = Math.random() * 2; // Random delay (0-2s)

        return (
          <div
            key={circle}
            className={styles.circleContainer}
            style={{
              top: `${randomTop}vh`,
              left: `${randomLeft}vw`,
              animationDuration: `${randomDuration}s`,
              animationDelay: `${randomDelay}s`,
            }}
          >
            <div className={styles.circle}></div>
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
