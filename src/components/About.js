import React,{useContext,useState,useEffect} from 'react';
import { PersonalContext } from '../apis/Personal';
import '../styles/about.css'; 
import Prof from '../images/prof.png';
import Beginn from '../images/beginn.png';
import Ober from '../images/ober.webp';
import Tief from '../images/tief.webp';



function About() {
  const { personalData } = useContext(PersonalContext);

  const whoami = personalData[1] || {};
  const me= personalData[0] || {};
  return (
     <div className="App-about">
        <div className='intro'>
          <h1>{whoami.name}</h1>
          <p>{me.skill}</p>
          <img src={Prof} alt="Profile" className="profile-image" />
        </div>
        <p className='whoami'>
          Ich bin ein leidenschaftlicher Fullstack-Developer, der sich bereits seit dem Alter von 12 Jahren intensiv mit verschiedenen IT-Bereichen auseinandersetzt. Mein Weg begann mit der Arbeit an der Kommandozeile (CMD, Bash) und der Entwicklung eines tiefen Verständnisses für Systemprozesse und Automatisierung. Über die Jahre habe ich meine Fähigkeiten stetig erweitert – vom Frontend über das Backend bis hin zur mobilen App-Entwicklung. Heute bringe ich vielseitige Erfahrung, ganzheitliches Denken und Begeisterung für moderne Technologien in jedes Projekt ein.
        </p>
        <div className='start'>
          <h2>!!Wie Alles Begann!!</h2>
          <div className='beginn'>
             <img alt='Beginn in der CMD Console' src={Beginn} className='beginn-image'/>
             <p className='history'>
              Es fing alles an, als ich mit 12 zum ersten Mal am Rechner meines Vaters saß. Nach vier spaßvollen Stunden begann ich, die Prozesse hinter dem, was ich da tat, zu hinterfragen. Ich wollte verstehen, wie das alles funktioniert. Also machte ich mich schlau und fand im Internet die Antworten, nach denen ich gesucht hatte.

Damals war es noch möglich, sich durch YouTube-Tutorials sehr viel selbst beizubringen. Ich tauchte ein – und für die nächsten vier Jahre hatte ich meine Beschäftigung gefunden. Die Eingabeaufforderung (CMD) und die Shell waren in dieser Zeit meine Spielwiese. Schritt für Schritt wagte ich es, neue Befehle und Algorithmen zu lernen.

Als ich 16 wurde, vernachlässigte ich das Ganze jedoch ein wenig – vor allem wegen wichtiger schulischer Verpflichtungen.
             </p>
          </div>
        </div>
        <div className='middle'>
          <h4>Einstieg</h4>
          <div className='middle-content'>
            <p className='step'>
              Nun hatte ich meinen Schulabschluss, also besuchte ich eine Oberschule, in der es mir auch möglich war, meine Leidenschaft für IT auszuleben.
Die Lehrer lobten mich bereits für meine Vorarbeit, sodass wir uns komplett auf die Programmierung konzentrieren konnten.
Dort bin ich zum ersten Mal auf Java gestoßen. Andere Tools wie Python und SQL waren mir bereits bekannt, die ich direkt in der Konsole nutzen konnte – ohne jegliche Schwierigkeiten.
Doch meine Begeisterung für diese Sprachen trat in den Hintergrund, sobald ich mit Java in Kontakt kam. Ich wusste, dass ich mein Wissen damit noch viel weiter vertiefen könnte – und so begann meine Reise in die Programmierung.
            </p>
            <img alt='OberStuffe' src={Ober} className='ober'/>
          </div>
        </div>
        <div className='intence'>
          <h5>Vertiefung</h5>
          <div className='learn'>
            <img  alt="Home Lab" src={Tief} className='repair'/>
      <div className='intensität'>
  <p>
    Nach meiner Schulzeit im Jahr 2021 habe ich während meiner Vollzeitarbeit ständig IT-Bücher gelesen und in meiner Freizeit das Gelernte aktiv geübt.  
    Ich machte kleinere Fortschritte durch erste kleine Projekte wie Pacman, Snake und weitere, dabei arbeitete ich mit folgenden Programmiersprachen:
  </p>

  <ul>
    <li><strong>Programmiersprachen:</strong></li>
    <li>C, C++, C#</li>
    <li>Java</li>
    <li>Python</li>
    <li>Swift</li>
    <li>JavaScript</li>
  </ul>

  <ul>
    <li><strong>Markup Languages:</strong></li>
    <li>XML</li>
    <li>HTML</li>
    <li>XHTML</li>
  </ul>

  <ul>
    <li><strong>Structured Query Language:</strong></li>
    <li>NoSQL</li>
    <li>SQL</li>
    <li>CSS</li>
  </ul>

  <p>
    Mein Alltag nach der Arbeit bestand darin, intensiv daran zu arbeiten, diese Fähigkeiten zu meistern.  
    Täglich verbrachte ich etwa 8 Stunden damit, kontinuierlich neue Projekte zu entwickeln und zu testen.
  </p>
</div>
          </div>
        </div>
        <div className='origens'>
          <h1> die Quellen</h1>
          <div className='quellen'>
             <ul>
    <li>
      <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools Logo" width="100" />
      </a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
        <img src="https://developer.mozilla.org/mdn-social-share.d893525a4fb5fb1f67a2.png" alt="MDN Logo" width="100" />
      </a>
    </li>
    <li>
      <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
        <img src="https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg" alt="freeCodeCamp Logo" width="100" />
      </a>
    </li>
    <li>
      <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg" alt="Stack Overflow Logo" width="100" />
      </a>
    </li>
  </ul> 
        <ol>
             <li>
      <a href="https://www.youtube.com/@BroCodez" target="_blank" rel="noopener noreferrer">
        <img src="https://yt3.googleusercontent.com/ytc/AIdro_mPFVsxROj1dOtTWc9iNBwDYV4z42Q8LPokBSewiW9pCSg=s160-c-k-c0x00ffffff-no-rj" alt="Code Bro Logo" width="100" />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/@NetworkChuck" target="_blank" rel="noopener noreferrer">
        <img src="https://yt3.googleusercontent.com/ytc/AIdro_k01-_GpvVZW8w4ULtaQaa55ls8aMf2a5dXhIe56pjMvG0=s160-c-k-c0x00ffffff-no-rj" alt="NetworkChuck Logo" width="100" />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/@Programmierenlernen" target="_blank" rel="noopener noreferrer">
        <img src="https://yt3.googleusercontent.com/ytc/AIdro_nh1hKt9hjsPwNfCgE_3EPrrXuBOJwvL_Kftar4JqIiFw=s160-c-k-c0x00ffffff-no-rj" alt="Traversy Media Logo" width="100" />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/@LoiLiangYang" target="_blank" rel="noopener noreferrer">
        <img src="https://yt3.googleusercontent.com/FIO6O8rcjKA7A0844KEyEJ9ts6mVnc5jkcUH3nMqpZz3lt12Gf2HoGGJ3ObB-brRsMowYzY_Qg=s160-c-k-c0x00ffffff-no-rj" alt="freeCodeCamp Logo" width="100" />
      </a>
    </li>
        </ol>
          </div>
        </div>
     </div>
  );
}
export default About;
