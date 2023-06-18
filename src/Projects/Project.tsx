import React from 'react';
import s from './Project.module.css'

type PropsType = {
    img: string
    title: string
    description: string
}

const Project = (props: PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <img className={s.img} src={props.img} alt=""/>
                <a href="">Check</a>
            </div>

            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Project;