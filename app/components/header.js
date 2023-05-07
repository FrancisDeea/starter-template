'use client'

import styles from './header.module.scss'

import { BsList } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

import Nav from './nav'

import { useState } from 'react'

export default function Header() {
    const [show, setShow] = useState(false);

    // If <show> state is false, <close> style will be applied, or vice-versa.
    const open = { "height": "100vh", "visibility": "visible" };
    const close = { "height": "0", "visibility": "hidden" };

    // This switch function will be applied to the buttons and passed it to <Nav> component to be applied when one link is clicked
    function handleClick() {
        setShow(!show);
    }

    return (
        <header className={styles.container}>
            <span className={styles.logo}>Hello logo!</span>
            <BsList onClick={handleClick} />
            <div className={styles.modal} style={show ? open : close}>
                <Nav onClick={handleClick} />
                <GrClose className={styles.btn_close} onClick={handleClick} />
            </div>
        </header>
    )
}