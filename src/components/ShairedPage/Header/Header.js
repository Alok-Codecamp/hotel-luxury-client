import {React,useState} from "react";
import "./Header.css";
import { Phone,Facebook,Twitter,Instagram,Mail} from 'react-feather';

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
          <Phone className="phone-icon" color="#1CC3B2" size={16}/><i className="phone">(123) 456-0956</i>
          <Mail color="#1CC3B2" size={16}/><i className="mail">luxuryHotel@gmail.com</i>
          </div>
          {/* socila site link */}
          <div className="social-site">
            <a className="Facebook" onClick={handlecolorChangeFacebook} style={{color:activeFacebook? "#1CC3B2":"white"}} href="#"><Facebook size={16} /></a>
            <a onClick={handlecolorChangeTwitter} style={{color:activeTwitter? "#1CC3B2":"white"}} href="#" className="Twitter"><Twitter  size={16}/></a>
            <a onClick={handlecolorChangeInstagram} style={{color:activeInstagram? "#1CC3B2":"white"}} href="#" className="Instagram"><Instagram  size={16}/></a>
            
          </div>  
        </div>
        </>
    )
}

export default Header;