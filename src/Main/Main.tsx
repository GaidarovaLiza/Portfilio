import React from 'react';
import s from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <span>Hi!</span>
                    <h1>I am Gaidarova Liza</h1>
                    <p>A Front-end developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};
