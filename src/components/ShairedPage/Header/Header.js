import {React,useState} from "react";
import "./Header.css";
import { Phone,Facebook,Twitter,Instagram,Mail, Search} from 'react-feather';

const Header=()=>{
  const [activeFacebook,setActiveFacebook]=useState(false)
  const [activeTwitter,setActiveTwitter]=useState(false)
  const [activeInstagram,setActiveInstagram]=useState(false)
  const handlecolorChangeFacebook=()=>{
    setActiveFacebook(!activeFacebook);
    setActiveTwitter(false);
    setActiveInstagram(false);
  }
  const handlecolorChangeTwitter=()=>{
    setActiveTwitter(!activeTwitter);
    setActiveFacebook(false);
    setActiveInstagram(false);
  }
  const handlecolorChangeInstagram=()=>{
    setActiveInstagram(!activeInstagram);
    setActiveFacebook(false);
    setActiveTwitter(false);
  }
    return(
        <>
        {/* header contact  */}
        <div className="contact">
          <div className="call-mail">
            <ul>
          <li style={{marginTop:'6px'}}><Phone color="#1CC3B2" size={16}/></li>
          <li className="phone">(123) 456-0956</li>
          <li style={{marginTop:'6px',marginLeft:'20px'}} ><Mail color="#1CC3B2" size={16}/></li>
          <li className="mail">luxuryHotel@gmail.com</li>
          </ul>
          </div>
          {/* socila site link */}
          <div className="social-site">
            <a className="Facebook" onClick={handlecolorChangeFacebook} style={{color:activeFacebook? "#1CC3B2":"white"}} href="#"><Facebook size={16} /></a>
            <a onClick={handlecolorChangeTwitter} style={{color:activeTwitter? "#1CC3B2":"white"}} href="#" className="Twitter"><Twitter  size={16}/></a>
            <a onClick={handlecolorChangeInstagram} style={{color:activeInstagram? "#1CC3B2":"white"}} href="#" className="Instagram"><Instagram  size={16}/></a>
            
          </div>  
        </div>
        {/* menu bar  */}
        <div className="menu-bar">
          <div className="logo">Logo</div>
          {/* navigation  section  */}
          <div className="navigation"><ul>
            <li>Home</li>
            <li>Rooms</li>
            <li>About us</li>
            <li>News</li>
            <li>Contact</li>
            <li style={{marginTop:'6px'}}><Search size={16}></Search></li>
          </ul></div>
          {/* book now  */}
          <div className="top-book-button">
            <button>Book now</button>
          </div>
        </div>
        </>
    )
}

export default Header;