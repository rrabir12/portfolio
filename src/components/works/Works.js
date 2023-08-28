import "./Works.css";
import React, { useState } from 'react';

export default function Works() {
  const [currentSlide,setCurrentSlide] = useState(0);

  const data = [
    {
    id: '1',
    icon: "Assets/mobile.webp",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum neque et pulvinar varius. Maecenas sapien libero, fringilla at aliquet fringilla, accumsan in sem. bhybhh",
    img: "Assets/work.avif"
    },
    {
      id: '2',
      icon: "Assets/mobile.webp",
      title: "Logo Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum neque et pulvinar varius. Maecenas sapien libero, fringilla at aliquet fringilla, accumsan in sem. jimiu",
      img: "https://99designs-start-static.imgix.net/homepage/logo-identity.jpg?auto=format&ch=Width%2CDPR&w=240&h=240&q=50&dpr=2"
      },
      {
        id: '3',
        icon: "Assets/mobile.webp",
        title: "Business Web Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum neque et pulvinar varius. Maecenas sapien libero, fringilla at aliquet fringilla, accumsan in sem. hhnhn",
        img: "https://99designs-start-static.imgix.net/homepage/business-advertising.jpg?auto=format&ch=Width%2CDPR&w=240&h=240&q=50&dpr=2"
        },
  ];
  const handleClick =(way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ?currentSlide -1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ?currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div className="slider" style={{ transform: `translateX(-${ currentSlide * 100}vw)`}}>
       { data.map((d)=>(
        <div className="container">
          <div className="item">
          <div className="left">
            <div className="leftcontainer">
              <div className="imgcontainer">
                   <img src={d.icon} alt=""/>
              </div>
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              <span>Projects</span>
            </div>
          </div>
          <div className="right">
            <img src={d.img} alt=""></img>
          </div>
          </div>
        </div>))
        }
      </div>
  
      <img src="Assets/4473010_arrow_arrow outline_left_thin arrow_icon.png" alt="" className="left arrow" onClick={()=>handleClick('left')} />
      <img src="Assets/4473005_arrow_next arrow_outline right arrow_right_right arrow_icon.png" alt="" className="right arrow" onClick={()=>handleClick()} />
    </div>
  )
}
