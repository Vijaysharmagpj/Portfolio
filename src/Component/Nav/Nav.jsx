import React, { useState } from 'react';
import './Nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav=()=>{

    const [activeNav,setActiveNav]=useState('#')

    return(
        <nav>
            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active': ''}><IoHomeOutline /></a>
            <a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav==='#about' ? 'active': ''}><CiUser /></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')}className={activeNav==='#experience' ? 'active': ''}><RiBook2Line /></a>
            <a href="#services" onClick={()=> setActiveNav('#services')}className={activeNav==='#services' ? 'active': ''}><RiServiceLine /></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')}className={activeNav==='#contact' ? 'active': ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}
export default Nav;