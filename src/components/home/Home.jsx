import React from 'react';
import style from "./Home.module.css"; // Ensure the CSS file name is correct
import HeroImage from "../../assets/png1.png";

const Home = () => {
  return (
    <div id='home'>
      <div className={style.hero_component}>
        <div className={style.left_side}>
          <p className={style.upper_text_style}>
            Hello I'm Satyam
          </p>
          <p className={style.bottom_text_style}>
            &lt;MERN stack Developer/&gt;
          </p>
          <p className={style.detail_text}>
            Passionate and detail-oriented Frontend Developer, proficient in
            React.js along with HTML, CSS, and JavaScript, with a strong
            foundation in responsive design and user experience principles.
          </p>
          <button className={style.download_btn}>
            <a
              className="link_under_button"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/drive/folders/1JOk2O5__6QYCqf1GE9xT4WQpaH-q832x?usp=drive_link"
            >
              Download CV
            </a>
          </button>
        </div>
        <div className={style.right_section}>
          <div className={style.img_section}>
            <img src={HeroImage} alt="satyam" className={style.hero_image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
