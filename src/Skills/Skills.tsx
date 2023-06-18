import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

const skills = [
    {title: 'HTML/CSS', description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {title: 'React', description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {title: 'JS/TS', description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
]
type SkillType = {
    title: string
    description: string
}

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    {skills.map(s => <Skill title={s.title} description={s.description}/>)}
                </div>
            </div>
        </div>
    );
};

