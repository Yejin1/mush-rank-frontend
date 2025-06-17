// 네비게이션바
"use client";
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-left']}>
                <div
                    className={styles['navbar-brand']}
                >
                    <img src={'/icon3.png'} className={styles['navbar-logo']} />
                    <div className={styles['navbar-title']}>Mush Rank</div>
                </div>
            </div>
            <ul className={styles['navbar-menu']}>
                <li><a href="/">Home</a></li>
                <li><a href="/weekly">Weekly</a></li>
                <li><a href="/monthly">Monthly</a></li>
                <li><a href="/my">My</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;