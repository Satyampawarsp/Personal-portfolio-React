import React from 'react';
import styles from './Circle.module.css';

const Circle = () => {
  const circles = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      {circles.map((circle) => {
        const randomTop = Math.random() * 100; 
        const randomLeft = Math.random() * 100; 
        return (
          <div
            key={circle}
            className={styles.circleContainer}
            style={{
              top: `${randomTop}vh`,   
              left: `${randomLeft}vw`, 
            }}
          >
            <div className={styles.circle} />
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
