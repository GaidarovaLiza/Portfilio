import React from 'react';
import s from './Icon.module.css'

type PropsType = {
    content: string
}

export const Icon = (props: PropsType) => {
    return (
        <div className={s.icon}>
            {props.content}
        </div>
    );
};
