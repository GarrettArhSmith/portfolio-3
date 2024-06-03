'use client'
import { useState } from 'react'
import s from "./Nav.module.css";
import Link from 'next/link'
import { CgMenu, CgClose } from "react-icons/cg";

export default function Nav() {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleNav = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <nav className={`${s.navContainer} ${isOpen && s.navContainerOpen}`}>
      <div className={s.header}>
        <span>
          <h1 className={s.name}>Garrett Smith</h1>
          <h4>Software Engineer</h4>
        </span>
        <span className={s.menuIcon} onClick={toggleNav}>
        { isOpen ? <CgClose className={s.close} /> :
          <CgMenu className={s.hamburger} /> }
        </span>
      </div>
      <ul className={`${s.navList} ${isOpen && s.navListOpen}`}>
        <li><a href="#about" onClick={toggleNav}>About</a></li>
        <li><a href="#work" onClick={toggleNav}>Work</a></li>
        <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
        <li><a href="#resume" onClick={toggleNav}>Resume</a></li>
      </ul>
    </nav>
  );
}
