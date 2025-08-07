import React, { useContext, useState } from "react";
import { PersonalContext } from "../apis/Personal";
import { useNavigate } from "react-router-dom";
import "../styles/bussiness.css";

const Bussiness = () => {
  const { item, clearItem } = useContext(PersonalContext); // add clearItem function
  const navi = useNavigate();

  const isEmpty = item && Object.keys(item).length === 0;

  // Form state
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deadline, setDeadline] = useState(""); // e.g. date/time or string input
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build data payload
    const payload = {
      customerName,
      email,
      phone,
      deadline,
      productName: item.productName,
      packageType: item.packageType,
      selectedChoice: item.selectedChoice,
      choiceDetails: item.choiceDetails,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_URL_ROUTE}deals`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json(); // Parse JSON response

if (response.ok) {
  setSubmitStatus(result.message || "Deal erfolgreich gesendet!");
  clearItem();
  setCustomerName("");
  setEmail("");
  setPhone("");
  setDeadline("");
} else {
  console.error("Server error:", result);
  setSubmitStatus(result.message || "Fehler beim Senden des Deals.");
}
    } catch (error) {
      console.error("Fehler beim Senden:", error);
      setSubmitStatus("Fehler beim Senden des Deals.");
    }
  };
    function handleValue(value) {
  if (value === "true" || value === true) {
    return "✓"; // check mark
  } else if (value === "false" || value === false) {
    return "✗"; // cross mark
  } else {
    return value; // empty if undefined or unknown
  }
}

  // Handle cancel (clear item)
  const handleCancel = () => {
    clearItem();
    navi("/projects"); // navigate back to deals page or wherever you want
  };

  if (isEmpty) {
    return (
      <div className="bussiness">
        <h1>Jetzt Deals abschließen!!!</h1>
        <p className="emptyContract">Sie haben Keine Deals gewählt.</p>
        <button className="deal" onClick={() => navi("/projects")}>
          To Deals
        </button>
      </div>
    );
  }

  return (
    <div className="bussiness">
      <h1>Jetzt Deals abschließen!!!</h1>
      <div className="deal-detailse">
        <p>
          <strong>Produkt:</strong> {item.productName}
        </p>
        <p>
          <strong>Package Type:</strong> {item.packageType}
        </p>
        <p>
          <strong>Ausgewählte Option:</strong> {item.selectedChoice}
        </p>

        <h3>Choice Details</h3>
        {item.choiceDetails && item.choiceDetails.length > 0 ? (
          item.choiceDetails.map((detail, index) => (
            <div key={index} className="choice-detail">
  {detail.included && Object.keys(detail.included).length > 0 && (
    <>
      <h4>Included:</h4>
      <ul className="in">
        {Object.entries(detail.included).map(([key, val]) => (
          <li key={key}>
            {key}: {handleValue(val)}
          </li>
        ))}
      </ul>
    </>
  )}

  {detail.exclude && Object.keys(detail.exclude).length > 0 && (
    <>
      <h4>Excluded:</h4>
      <ul className="ex">
        {Object.entries(detail.exclude).map(([key, val]) => (
          <li key={key}>
            {key}: {handleValue(val)}
          </li>
        ))}
      </ul>
    </>
  )}

  {detail.price && Object.keys(detail.price).length > 0 && (
    <>
      <h4>Preis:</h4>
      <ul className="price">
        {Object.entries(detail.price).map(([key, val]) => (
          <li key={key}>
            {key}: {val}
          </li>
        ))}
      </ul>
    </>
  )}
</div>
          ))
        ) : (
          <p>Keine Detailinformationen verfügbar.</p>
        )}
      </div>

      <form className="deal-form" onSubmit={handleSubmit}>
        <h3>Kundendaten</h3>
        <label>
          Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>
        <label>
          E-Mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Telefon:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <label>
          Lieferfrist (Datum/Uhrzeit):
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </label>

        <div className="form-buttons">
          <button type="submit">Deal absenden</button>
          <button type="button" onClick={()=>{handleCancel()}}>
            Auswahl löschen
          </button>
        </div>
      </form>

      {submitStatus && <p className="submit-status">{submitStatus}</p>}
    </div>
  );
};

export default Bussiness;
