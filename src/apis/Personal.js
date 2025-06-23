import React,{useState,useEffect,createContext} from "react";

const PersonalContext = createContext();

const PersonalProvider = ({ children }) => {
    const [personalData, setPersonalData] = useState({});

useEffect(() => {

    const fetchPersonalData = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_URL_ROUTE}infos`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPersonalData(data);
        }catch (error) {
            console.error('Error fetching personal data:', error);
        }finally{
            window.addEventListener(`scroll`, () => {
                const footer = document.getElementById('footer');
                
                if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                    
                }
            });
        }
    }
    fetchPersonalData();

}, []);


return(
    <PersonalContext.Provider value={{ personalData, setPersonalData }}>
      {children}
    </PersonalContext.Provider>
  );
}

export { PersonalProvider, PersonalContext };