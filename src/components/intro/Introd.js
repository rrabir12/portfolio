import "./Introd.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { init } from 'ityped';
import  { useEffect , useRef } from "react";



 function Intro() {

  const textRef=useRef(null);

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true,backDelay:1500,backSpeed:60, 
      strings: ["Developer", "Designer", "Content Writer"] });
    },[]);
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgcontainer">
        <img src="./Assets/IMG_20230415_130426.jpg" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrappers">
          <h2>Hi There,i'm</h2>
          <h1>Rabi kumar Roy</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <ExpandMoreIcon className="icon"/>
        </a>
      </div>
    </div>
  )
}

export default Intro;
