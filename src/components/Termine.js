import React, { useState, useContext,useEffect } from "react";
import Calendar from "react-calendar";
import { PersonalContext } from "../apis/Personal";
import "../styles/termine.css";

function Termin() {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", mail: "", address: "", phone: "",time:"", note: "" });
  const { termine } = useContext(PersonalContext); // fetched globally

  const [taken,setTaken]=useState(false);





  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = date.toISOString().split("T")[0]; // yyyy-mm-dd

    try {
      const response = await fetch(`${process.env.REACT_APP_URL_ROUTE}planer/Termine`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: formData.name,
          mail: formData.mail,
          address: formData.address,
          phone : formData.phone,
          time: formData.time,
          note: formData.note,
          date: formattedDate
        }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      alert("Termin successfully added!");
      setShowModal(false);
      setFormData({ name: "", mail: "", address: "", phone: "",time: "", note: "" });
    } catch (err) {
      console.error("Error adding Termin:", err);
      alert("Failed to add Termin.");
    }
  };
  const tileClassName = ({ date, view }) => {
  if (view === "month") {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;

    if (Array.isArray(termine) && termine.includes(dateStr)) {
      return "highlight"; // booked = red
    }
    return "available"; // free = green
  }
  return null;
};

  
const handleChange = (selectedDate) => {
  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
  const day = String(selectedDate.getDate()).padStart(2, "0");
  const dateStr = `${year}-${month}-${day}`;
  const jumper=document.getElementById("choosen");
  if (Array.isArray(termine) && termine.includes(dateStr)) {
    // It's a highlighted (booked) date — ignore click
    setTaken(true);
    return;
  }

  // Else update selected date
  setDate(selectedDate);
  setTaken(false);
  jumper.style.animation="entrance 2s linear";
};

// Handles form input changes (name, phone, mail, time, etc.)
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  return (
    <div className="Termine">
      <h1>Termin Buchen</h1>
      <Calendar 
  onChange={handleChange} 
  className="calendar"
  value={date} 
  calendarType="gregory"
  tileClassName={tileClassName}
/>
      <div className="free">
        {taken ? <></>:<p className="aviable" id="choosen">
  Tag: {`${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`}
</p> }
       <button id="paco" className={taken ? "not": "yest"} onClick={() => setShowModal(prev => !prev)}>Buchen</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={()=>{setShowModal(prev=>!prev)}}>&times;</span>
            <h3 className="appointment">Termin for: {`${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`}</h3>
            <form onSubmit={handleSubmit}  className="data">
             <input
    name="name"
    type="text"
    placeholder="Name"
    value={formData.name}
    onChange={handleInputChange}
    required
  />

  <input
    name="mail"
    type="email"  // ✅ Corrected from "e-mail" to "email"
    placeholder="Email"
    value={formData.mail}
    onChange={handleInputChange}
    required
  />

  <input
    name="address"
    type="text"   // ✅ Explicit type
    placeholder="Address"
    value={formData.address}
    onChange={handleInputChange}
  />

  <input
    name="phone"
    type="tel"   // ✅ Corrected from "phone" to "tel"
    placeholder="Phone"
    value={formData.phone}
    onChange={handleInputChange}
    required
  />

  <input
    name="time"
    type="time"
    placeholder="Time"
    value={formData.time}
    onChange={handleInputChange}
    required
  />
  <label className="Message">Message</label>

  <textarea
    name="note"
    placeholder="Message"
    value={formData.note}
    onChange={handleInputChange}
  ></textarea>

  <div className="actions">
    <button type="submit">Anfragen</button>
  </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}


export default Termin;
