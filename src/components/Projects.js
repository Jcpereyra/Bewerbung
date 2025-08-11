import React,{useState,useContext,useEffect,useRef} from 'react';
import "../styles/projects.css";
import { useNavigate } from 'react-router-dom';
import Programming from "../images/programming.png";
import { PersonalContext } from '../apis/Personal';
import Websiten from '../images/website.png';
import Mobile from '../images/smartphone.png';
import FullStack from '../images/fullstack.png';
import Closer from "../images/closer.gif";






function Projects() {
  const { products,images} = useContext(PersonalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [open,setOpen] = useState(false);
  const [matchImage,setMatchImage]= useState("");
  const [item,setItem] = useState({});


  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = query
      ? products.filter((product) => product.name.toLowerCase().includes(query))
      : products;
    setFilteredProducts(filtered.length > 0 ? filtered : [products[products.length -1 ]]);
  };
  const openModal= (src,item) =>{
    setOpen(prevOpen=>!open);
    //Get the Whole Document to pick the Actual Image out of the Container
     setMatchImage(src);
     setItem(item);
  }
  const closeModal =()=> setOpen(false);

  return(
    <div className="projects" >
      <div className="projects-container">
        <div className="projects-header">
          <img src={Programming} alt="Programming" />
          <h1>Projects</h1>
            <form id="sear" className='projects-search' onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder="Search for a product..."
          value={searchQuery}
          onChange={handleSearch}
          id='look'
          className="look"
        />
        <button type="submit" className="go">Search</button>
      </form>
        </div>
        <div className="projects-content">
          <p className='explaining'>Trotz der begrenzten Anzahl an Projekten in meinem öffentlichen GitHub-Account wird mein gesamtes technisches Können und meine Erfahrung nicht vollständig widergespiegelt.

Viele meiner Werke werden aus Gründen der Sicherheit und des Datenschutzes nicht veröffentlicht. In den vergangenen Jahren habe ich mich intensiv damit befasst, Methoden zur Sicherung sensibler Daten und zur Sicherung von Systemen vor unerwünschtem Zugriff zu erarbeiten.
Daher arbeite ich bevorzugt mit serverseitigen Anwendungen, die nicht nur eine zusätzliche Sicherheitsschicht bieten, sondern auch vermeiden, dass potenzielle Angreifer leicht nachvollziehen können, wie das System funktioniert.

Wenn Sie an konkreten Beispielen meiner Arbeit interessiert sind, stelle ich auf Anfrage gerne ausgewählte Projekte oder Codeauszüge zur Verfügung.</p>
           
<div className='producs-bucket'>
          {Object.keys(filteredProducts).length <= 0 ? (
  <div className='producs-items'>{
    Object.keys(products).length>0 &&
    (products).map((product,index)=>(
      <div key={product.id} className='product-item'>
        <h1>{product.name}</h1>
        <img alt={product.id} src={images[product.id]} key={product.id} />
        <p className='description'>{product.Description}</p>
        <button className='details' onClick={()=>openModal(images[product.id],product)}>Details</button>
      </div>
    ))
  }</div>
) : (
  <div className='producs-items'>
      {Object.keys(filteredProducts).length > 0 &&  (filteredProducts||[]).map((product,index) => (
          <div  key={product.id} className='product-item'>
            <h1 className="item-names">{product.name}</h1>
            <img alt={product.name} key={product.id} src={images[product.id]} />
            <p className='description'>{product.Description}</p>
            <button className='details' onClick={()=>openModal(images[product.id],product)}>Details</button>
          </div>
        ))}
  </div>
)}
</div>
        </div>
      </div>
      {open ? (
          <DetailModal handleOpen={closeModal} image={matchImage} items={item}/>
        
        
      ):(<></>)}
    </div>
  );
}

const DetailModal = ({items,handleOpen,image})=>{
 const [selectedDealIndex, setSelectedDealIndex] = useState(0);
 const [selectedDealName, setSelectedDealName] = useState(""); 
 const {setDeal,setItem} = useContext(PersonalContext);
 const patcher = {
  Website: Websiten,
   "IOS/Android App": Mobile,
   Full: FullStack
 }
 const [box,setBox] = useState({});
 const [selectedChoice, setSelectedChoice] = useState("");
 const navigate = useNavigate();
 
    
useEffect(()=>{
  setSelectedDealIndex(0);
  setSelectedDealName("Website");
  setSelectedChoice("Server");
},[]);
//Trigger Image Animation Separated From the Button after a Click Reacting as a timer pulse Creation
  React.useEffect(() => {
    if (items?.Package?.length > 0) {
      const firstPkg = items.Package[0];
      const dealKey = Object.keys(firstPkg)[0];
      const dealData = firstPkg[dealKey];
      setSelectedDealIndex(0);
      setBox(dealData);
    }
  }, [items]);
    
  function handleValue(value) {
  if (value === "true" || value === true) {
    return "✓"; // check mark
  } else if (value === "false" || value === false) {
    return "✗"; // cross mark
  } else {
    return value; // empty if undefined or unknown
  }
}
 
  function handleContract(itemName, choice) {
  const selectedChoiceToUse = choice || selectedChoice;

  if (!selectedChoiceToUse) {
    alert("Please select a sub-package first!");
    return;
  }

  const selectedContract = {
    productName: items.name,
    packageType: itemName,
    selectedChoice: selectedChoiceToUse,
    choiceDetails: box[selectedChoiceToUse]
  };

  setItem(selectedContract);
  setDeal(prevDeal => prevDeal + 1);

  console.log("Selected Contract:", selectedContract);
  handleOpen();
  navigate("/bussiness");
}

  return(<div className='modal'>
    <div className='modal-content'>
      <span className='close' onClick={handleOpen}>&times;</span>
      <h1>{items.name}</h1>
      <img className='logo' alt={items.id} src={image}/>
      <div className='capt'>
        <p className='description'>{items.Description}</p>
        <span className='req'>{items.Features}!!</span>
      </div>
      <div className='concie'>

    {/* Render indicators with deal names */}
    <div className="deal-indicators">
      {items.Package.map((pkgObj, index) => {
  const dealKey = Object.keys(pkgObj)[0];
  return (
    <button
      key={dealKey}
      className="deal-type"
      onClick={() => {
        setSelectedDealIndex(index);
        setBox(pkgObj[dealKey]);
         setSelectedDealName(dealKey);
      }}
    >
      <img alt={index} src={patcher[dealKey]} />
      {dealKey}
    </button>
  );
})}
      </div>
      <p className='indi'>{selectedDealName}</p>
          {/* Display selected deal */}
    <div className="deal-details">
      {Object.keys(box).length === 0 ? (
    <p>Default data or loading...</p>
  ) : (
    Object.entries(box).map(([key, arr]) => (
      <div key={key} className='deal-details-card'>
        <h3>{key}</h3>
        {arr.map((item, index) => (
  <div key={index} >
    {/* Included features */}
    {item.included && Object.keys(item.included).length > 0 && (
      <div className='in'>
        <h4>Included:</h4>
        <ul>
          {Object.entries(item.included).map(([feature, value]) => (
            <li key={feature}>{feature}: {handleValue(value)}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Excluded features */}
    {item.exclude && Object.keys(item.exclude).length > 0 && (
      <div className='ex'>
        <h4>Excluded:</h4>
        <ul>
          {Object.entries(item.exclude).map(([feature, value]) => (
            <li key={feature}>{feature}: {handleValue(value)}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Pricing */}
    {item.price && Object.keys(item.price).length > 0 && (
      <div className='pri'>
        <button disabled>Month: {item.price.Month ?? '00.00'}</button>
        <button>Front Pay: {item.price.frontPay ?? '00.00'}</button>
        <button disabled>Total: {item.price.price ?? '00.00'}</button>
      </div>
    )}
  </div>
))}

   <button
  onClick={() => {
    handleContract(selectedDealName, key); // Pass choice explicitly
  }}
  className="contract"
>
  Contract
</button>
      </div>
    ))
  )}
    </div>
    </div>
    </div>
  </div>)
}

export default Projects;