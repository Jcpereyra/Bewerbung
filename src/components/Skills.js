import React, { useState, useContext, useEffect } from "react";
import '../styles/skills.css';
import { PersonalContext } from "../apis/Personal";

function Skills() {
  const { skills } = useContext(PersonalContext);

  const [programming, setProgramming] = useState({});
  const [operatingSystems, setOperatingSystems] = useState({});
  const [books, setBooks] = useState({});
  const [modalContent, setModalContent] = useState(null);



  useEffect(() => {
    if (skills && typeof skills === 'object') {
      setProgramming(skills[0] || {});
      setOperatingSystems(skills[1] || {});
      setBooks(skills[2] || {});
    }else{
      console.error("Skills data is not in the expected format:", skills);
      setProgramming({});
      setOperatingSystems({});
      setBooks({});
    }
  }, [skills]);

  return (
    <div className="skills">
      <div className="skills-content">
        <h1>IT Skills</h1>
        <div className="programming">
          {Object.keys(programming).map((key) => (
            <div key={key} className="programming-item">
              <h2>{key}</h2>
              <div className="programming-content">
                {Object.entries(programming[key]).map(([entryKey, entryValue], index) => (
                  <div key={index} className="programming-item-detail">
                    <h3 className="programming-name">{entryKey}</h3>
                    <img alt={entryValue.name} src={entryValue.logo} className="programming-logo" />
                    <p className="programming-details">{entryValue.description}</p>
                    <button
                      className="programming-button"
                      onClick={() => setModalContent(entryValue)}
                    >
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {Object.keys(operatingSystems).map((key) => (
            <div key={key} className="operating-systems-item">
              <h2>{key}</h2>
              <div className="operating-systems-content">
                {Object.entries(operatingSystems[key]).map(([entryKey, entryValue], index) => (
                  <div key={index} className="operating-systems-item-detail">
                    <h3 className="operating-systems-name">{entryKey}</h3>
                    <img alt={entryValue.name} src={entryValue.logo} className="operating-systems-logo" />
                    <p className="operating-systems-details">{entryValue.description}</p>
                    <button
                      className="operating-systems-button"
                      onClick={() => setModalContent(entryValue)}
                    >
                      Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalContent && (
        <Modalpad content={modalContent} onClose={() => setModalContent(null) } books={books} />
      )}
    </div>
  );
}

const Modalpad = ({ content, onClose,books }) => {
  const bookContent = books.books[content.name] || {};





  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img className="logo" src={content.logo} alt={content.name} />
        <h2 className="modal-title">{content.function}</h2>
        <p className="modal-description">{content.description}</p>
        <div className="modal-skills">

          {content.usage && (
          <div className="modal-usage">
            <h3>Usage:</h3>
              <ul>
      {content.usage.map((item, index) => (
        <li key={index} className="modal-usage-item">{item}</li>
      ))}
    </ul>
          </div>
        )}

        {content.frameworks && (
          <div className="modal-frameworks">
            <h3>Frameworks:</h3>
              <ul>
      {content.frameworks.map((item, index) => (
        <li key={index} className="modal-frameworks-item">{item}</li>
      ))}
    </ul>
          </div>
        )}

        </div>
        <div className="modal-learning">
          <h3>Learning Resources:</h3>
          <div className="modal-learning-content">
              <ul className="modal-learning-links">
              {
                content.quellen && content.quellen.map((link, index) => {
                  return(
                    <li key={index} className="modal-learning-link-item">
                      <a href={link} target="_blank" rel="noopener noreferrer" className="modal-learning-link">{link}</a>
                    </li>
                  )
                })
              }
              </ul>
              <div className="modal-learning-books">
                <img src={bookContent.logo} alt={bookContent.title} className="modal-book-image"/>
                <div className="modal-learning-book-title">
                  <h4>{bookContent.title}</h4>
                  <p>{bookContent.Author}</p>
                  <strong>{bookContent.preis}</strong>
                  <a href={bookContent.URL} target="_blank" rel="noopener noreferrer" className="modal-learning-book-link" type="button">Buy here</a>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;