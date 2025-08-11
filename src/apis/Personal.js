import React,{useState,useEffect,createContext} from "react";

const PersonalContext = createContext();

const PersonalProvider = ({ children }) => {
    const [personalData, setPersonalData] = useState({});
    const [skills,setSkills] = useState({});
    const [products, setProducts] = useState({});
    const [images, setImages] =  useState([]);
    const [deal,setDeal] = useState(0);
    const [item,setItem] = useState({});
    const [termine,setTermine] = useState({});

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
        }
    }

    const fetchSkills = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_URL_ROUTE}skills`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSkills(data);
        }catch (error) {
            console.error('Error fetching skills:', error);
        }
    }

    const fetchProducts = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_URL_ROUTE}products`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        }catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    const fetchTermine = async ()=>{
        try{
            const response = await fetch(`${process.env.REACT_APP_URL_ROUTE}Termine`);
            if (!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTermine(data);
        }catch (err){
            console.error("error Fetching Termine");
        }
    }



    fetchPersonalData();
    fetchSkills();
    fetchProducts();
    fetchTermine();
    
}, []);

useEffect(()=>{
    const fetchImages = async (optionalProducts = products) => {
  try {
    const imagePromises = optionalProducts.map(async (product) => {
      const url = `${process.env.REACT_APP_URL_ROUTE}images/${product.id}.png`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Image fetch failed');
      const blob = await res.blob();
      return { id: product.id, url: URL.createObjectURL(blob) };
    });

    const loadedImages = await Promise.all(imagePromises);

    const imageMap = loadedImages.reduce((acc, { id, url }) => {
      acc[id] = url;
      return acc;
    }, {});
    setImages(imageMap);  // images is now an object { 1: 'blob://...', 2: 'blob://...' }
  } catch (err) {
    
  }
};



  fetchImages(products);
},[products]);
  const clearItem = () => {
    setItem({});
    setDeal(0);
  };



 // ✅ Make fetchImages callable, not auto-run




return(
    <PersonalContext.Provider value={{ personalData, setPersonalData , skills,setSkills, products, setProducts,images, setImages,deal ,setDeal,item,setItem,termine , clearItem}}>
      {children}
    </PersonalContext.Provider>
  );
}

export { PersonalProvider, PersonalContext };