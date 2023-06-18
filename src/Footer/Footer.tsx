import React from 'react';
import s from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Icon} from "./Icon/Icon";

const icons = [
    {content: ''},
    {content: ''},
    {content: ''},
    {content: ''},
]

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2>Gaidarova Elizaveta</h2>
                <div className={s.icons}>
                    {icons.map(i => <Icon content={i.content}/>)}
                </div>
                <div className={s.text}>
                    &copy; 2023 All rights reserved.
                </div>
            </div>
        </div>
    );
};
