import React from "react";
import styles from './Skills.module.css'; // Import the CSS Module
import ComponentTitle from "../componentTitle/ComponentTitle";
import MainContainers from "../mainContainer/MainContainers";

function Skill() {
  const skills = [
    { icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg", name: "HTML" },
    { icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg", name: "CSS" },
    { icon: "https://cdn.worldvectorlogo.com/logos/react-1.svg", name: "React" },
    { icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg", name: "Next.js" },
    { icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", name: "Tailwind" },
    { icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg", name:"Bootstrap" },
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmNwH6inJs69JgzclVo87ZqqiKVTOSVocKOw&s", name: "Node.js" },
    { icon: "https://e7.pngegg.com/pngimages/846/87/png-clipart-mean-solution-stack-express-js-node-js-javascript-github-text-trademark.png",name: "Express" },
    { icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", name: "MongoDB" },
    { icon: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg", name: "MUI" },
    { icon: "https://cdn.worldvectorlogo.com/logos/node-sass.svg", name: "Sass" },
    { icon: "https://cdn.worldvectorlogo.com/logos/postman.svg", name: "Postman" },
    { icon: "https://cdn.worldvectorlogo.com/logos/git.svg", name: "Git" },
    { icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjDuG0MRI2111Rb1ubhbQ0wNelazqoWMnYw&s", name: "GitHub" },
    { icon: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg", name: "Mysql" },
    
  ];

  return (
    <div id="skills">
      <MainContainers>
        <ComponentTitle title={"My Skills"} />
        
        {/* Skill Grid for Row 1 */}
        <div className={`${styles.skillGrid} ${styles.row1}`}>
          {skills.slice(0, 6).map((skill, index) => (
            <div className={styles.skillCard} key={index}>
              <div className={styles.circleIcon}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Skill Grid for Row 2 */}
        <div className={`${styles.skillGrid} ${styles.row2}`}>
          {skills.slice(6, 11).map((skill, index) => (
            <div className={styles.skillCard} key={index}>
              <div className={styles.circleIcon}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Skill Grid for Row 3 */}
        <div className={`${styles.skillGrid} ${styles.row3}`}>
          {skills.slice(11, 15).map((skill, index) => (
            <div className={styles.skillCard} key={index}>
              <div className={styles.circleIcon}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>

      </MainContainers>
    </div>
  );
}

export default Skill;
