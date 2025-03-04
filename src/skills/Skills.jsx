import React, { useState } from 'react';
import './skills.css';
import { skills } from './Skills_data';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const [active, setActive] = useState(1);
    const [skill, setSkill] = useState(skills[0].data);

    function handleClick(skillId) {
        setActive(skillId);
        setSkill(skills[skillId - 1].data);
    }

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container">
                <div className="skills_buttons">
                    {skills.map((skill) => (
                        <button
                            key={skill.id}
                            onClick={() => handleClick(skill.id)}
                            className={active === skill.id ? "skills_button active_skills_button" : "skills_button"}
                        >
                            {skill.title}
                        </button>
                    ))}
                </div>
                <div className="skills_list_container">
                    {skill.map((skillItem) => (
                        
                        <div className="skill_container">
                            {/* <ProgressProvider valueStart={0} valueEnd={skillItem.level}> */}
                                <CircularProgressbarWithChildren value={skillItem.level} className="circular-progressbar" strokeWidth={3}
                                    styles={buildStyles({
                                        pathTransitionDuration: 0.5,
                                        pathColor: `var(--text-color)`,
                                        trailColor: "#",
                                        backgroundColor: "#3e98c7",
                                    })}
                                >
                                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                    <img src={skillItem.img} alt={skillItem.title} style={{ width: "50%", height: "50%" }} className="" />
                                    <div style={{ fontSize: 12, marginTop: -5 }} className="circular-progressbar-text" >
                                    </div>
                                </CircularProgressbarWithChildren>
                            {/* </ProgressProvider> */}
                            <p className='progressbar-text'>{skillItem.title}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
