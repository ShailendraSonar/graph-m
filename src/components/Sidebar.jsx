import React from 'react';
import { FiLogOut } from 'react-icons/fi'; 
import { GiHamburgerMenu } from "react-icons/gi";
import { IoTimer } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa";
import './Sidebar.css';
import logo from '../assets/logo.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>

        <div className="sidebar-logo">
            <img src={logo} alt="Logo" />
        </div>

       
        <div className="sidebar-icons">
            <GiHamburgerMenu size={24} color="#fff" />
            <IoTimer size={24} color="#fff" />
            <BsStack size={24} color="#fff" />
            <FaGitAlt size={24} color="#fff" />
        </div>
      </div>

      
      <div className="sidebar-avatar">
        <img
          src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
          alt="User Avatar"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Sidebar;
