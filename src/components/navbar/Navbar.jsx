// Navbar.js
import { useEffect, useRef } from "react";
import style from "./Navbar.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const navbar = useRef(null);

  useEffect(function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.current?.classList.add(style.scrolling);
      } else {
        navbar.current?.classList.remove(style.scrolling);
      }
    });
  }, []);

  return (
    <>
      <div ref={navbar} className={style.navbar}>
        <div>
          <a className={style.logo} href="/">SATYAM PAWAR</a>
        </div>
        <ul className={style.navlist}>
          <li>
            <a className={style.navigation} href="#about">
              <span className={style.nav_icons}>
                <i className="fa-solid fa-user"></i>
              </span>
              About
            </a>
          </li>
          <li>
            <a className={style.navigation} href="#projects">
              <span className={style.nav_icons}>
                <i className="fa-solid fa-suitcase"></i>
              </span>
              Projects
            </a>
          </li>
          <li className={style.home_navigation}>
            <a className={style.navigation} href="/">
              <p>
                <span className={style.nav_icons}>
                  <i className={`fa-solid fa-home ${style.home_icon}`}></i>
                </span>
              </p>
            </a>
          </li>
          <li>
            <a className={style.navigation} href="#skills">
              <span className={style.nav_icons}>
                <i className="fa-solid fa-code"></i>
              </span>
              Skills
            </a>
          </li>
          <li>
            <a className={style.navigation} href="#contact">
              <span className={style.nav_icons}>
                <i className="fa-solid fa-phone"></i>
              </span>
              Contact
            </a>
          </li>
        </ul>
        <div className={style.social_media_section}>
          <a href="https://github.com/satyam1733" rel="noopener noreferrer" target="_blank" className={style.link}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/satyam-pawar-1988b5247" target="_blank" rel="noopener noreferrer" className={style.link}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className={style.link}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/____.satyam.______?igsh=d280cHFmcjMwYTZk" target="_blank" rel="noopener noreferrer" className={style.link}>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
