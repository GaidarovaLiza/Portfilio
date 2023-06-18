import React from "react";
import s from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project";

const projects = [
    {
        title: 'Todolist',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        img: 'https://twowin.ru/wa-data/public/shop/products/67/78/17867/images/11509/11509.750x0.jpg'
    },
    {
        title: 'Social network',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        img: 'https://twowin.ru/wa-data/public/shop/products/67/78/17867/images/11509/11509.750x0.jpg'
    },
]
type ProjectsType = {
    title: string
    description: string
    img: string
}

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    {projects.map(p => <Project img={p.img} title={p.title} description={p.description}/>)}
                </div>
            </div>
        </div>
    );
};