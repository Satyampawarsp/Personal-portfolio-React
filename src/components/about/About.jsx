import React from 'react';
import style from "./About.module.css";
import Circle from '../circle/Circle';
import MainContainers from '../mainContainer/MainContainers';
import ComponentTitle from '../componentTitle/ComponentTitle';
import ActionBox from '../actionbox/ActionBox';

const About = () => {
  return (
    <div id='about'>
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainers>
        <div className={style.about_component}>
          <ComponentTitle title={"About me"}/>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              
            <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2020 - 2024"}
                  timeline_title={"Bachelors in E&Tc."}
                  location={" JSPM's Imperial College of Engineering and Research, Wagholi."}
                  details={"Pursued a Bachelor's degree in Electronics & Telecommunications with a 7.89 CGPA from SPPU."}
                />
              </div>
              
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2019 - 2020"}
                  timeline_title={"Senior Secondary (10+2)"}
                  location={"A.M college, Hadapsar,Pune."}
                  details={"Completed my Degree from State Board with 58 % from AnnaSaheb Magar College, Hadapsar,Pune-412308 ."}
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2017 - 2018"}
                  timeline_title={"High School "}
                  location={"Sadhana Vidyalaya, Hadapsar, Pune."}
                  details={"Completed my High School Degree from State Board with 75%."}
                />
              </div>
              
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"MAY 2024 - NOV 2024"}
                  timeline_title={"React Devloper"}
                  location={"REGO Digital Solutions Pvt Ltd"}
                  details={"I have worked as a junior Frontend devloper.Designed and Implemented Responsive user Interface"}
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2024 - 2025"}
                  timeline_title={"COMMING SOON"}
                />
              </div>
              
            </div>
          </div>
        </div>
      </MainContainers>
    </div>
  );
}

export default About;
