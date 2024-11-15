import styles from "./Project.module.css";
import quizIMG from "../../assets/quizIMG.png";
import Cental from '../../assets/Cental.png'
import { motion } from "framer-motion";
import Circle from "../circle/Circle";
import ComponentTitle from "../componentTitle/ComponentTitle";
import ProjectCard from "../projectCard/ProjectCard";
import MainContainer from '../mainContainer/MainContainers';

function Project() {
    return (
        <div id="projects" className={styles.projectContainer}>
            <Circle /> 
            <MainContainer>
                <div className={styles.project_page_component}>
                    <ComponentTitle title={"My projects"} />
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
                        className={styles.projects_component}
                    >
                        <ProjectCard
                            previewLink={"https://thereactquizz.netlify.app/"}
                            githubLink={""}
                            projectName={"React Quiz App"}
                            projectDetails={
                                "React Quiz App: Answer React questions, get results. Fun way to test React knowledge. Simple, interactive, and informative!"
                            }
                            demoImage={quizIMG}
                            skill_img={[
                                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                            ]}
                        />
                        <ProjectCard
                            previewLink={"https://themewagon.github.io/Cental/index.html"}
                            githubLink={"https://github.com/Satyampawarsp/Cental-Template-Using-React.git"}
                            projectName={"Cental-Car Rental"}
                            projectDetails={
                                "Cental-car-rental Website: Cental is car Rental , Website Which Rent the Cars and Offer Intresting Offers on Buying New cars."
                            }
                            demoImage={Cental}
                            skill_img={[
                                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                            ]}
                        />
                    </motion.div>
                </div>
            </MainContainer>
        </div>
    );
}

export default Project;
