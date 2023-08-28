import { useState } from 'react';
import "./Contact.css"

export default function Contact() {

  const [message,setMessage]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="https://png.pngitem.com/pimgs/s/196-1960631_svg-download-handshake-transparent-animated-handshake-clipart-hd.png" alt=""></img>
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="E-mail" />
          <textarea type="text" placeholder="Message" />
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply Asap :)</span>}
        </form>
      </div>
    </div>
  )
}
