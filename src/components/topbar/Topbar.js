import "./Topbar.css";
import PersonIcon from '@mui/icons-material/Person';
import  MailIcon from '@mui/icons-material/Mail';
// import React from "react";

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
          <div className="left">
             <a href="#intro" className="logo">genuine.</a>
             <div className="itemcontainer">
               <PersonIcon className="icon" />
                 <span>+977-981573657</span>
             </div>
             <div className="itemcontainer">
                <MailIcon className="icon"/>
                  <span>rabi@gmail.com</span>
             </div>
          </div>
          <div className="right" >
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="link1"></span>
            <span className="link2"></span>
            <span className="link3"></span>
          </div>
          </div>
      </div>
    </div>
  );
}
