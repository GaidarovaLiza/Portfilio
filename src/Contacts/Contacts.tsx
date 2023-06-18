import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <form action="" className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    );
};

