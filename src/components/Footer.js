import React, { useContext } from "react";
import { PersonalContext } from "../apis/Personal";
import Prof from "../images/prof.png";
import "../styles/footer.css"; 
//Images to use As Links for Comunication
import Insta from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import whatsapp from "../images/whatsapp.png";
import Flag from "../images/flag.png";

const Footer = () => {
  const { personalData } = useContext(PersonalContext);

  // Defensive check
  if (!personalData || !Array.isArray(personalData)) return null;

  const second = personalData[1] || {};

  // Simple function to convert country code to emoji flag

  return (
    <div className="footer">
        <img alt="Profil Bild" src={Prof}  className="footer_image" />
        {Object.keys(second).length > 0 ? (
    <div className="footer_text">
        <h2>{second.name}</h2>
        
        {/* Email link */}
        <p>
           <strong>Email:</strong> <a href={`mailto:${second.mail}`}>{second.mail}</a>
        </p>
        
        <p><strong>Address:</strong>{second.address}</p>
        
        {/* Phone link */}
        <p>
           <strong>Phone:</strong>  <a href={`tel:${second.phone}`}>{second.phone}</a>
        </p>
        <p><strong>Birthday:</strong> {second.birth}</p>
        {/* Nationality with flag */}
          <img alt={second.nationality} src={Flag} className="flag" />
    </div>
) : (
    <div className="footer_text">
        <h2>Informationen nicht verfügbar</h2>
    </div>
)}

        <div className="footer_links">
            <a href={second.insta} target="_blank" rel="noopener noreferrer">
                <img alt="Instagram" src={Insta} className="footer_icon" />
            </a>
            <a href={second.linkedin} target="_blank" rel="noopener noreferrer">
                <img alt="LinkedIn" src={linkedin} className="footer_icon" />
            </a>
            <a href={second.whatsApp} target="_blank" rel="noopener noreferrer">
                <img alt="WhatsApp" src={whatsapp} className="footer_icon" />
            </a>
        </div>
    </div>
  );
};

export default Footer;
