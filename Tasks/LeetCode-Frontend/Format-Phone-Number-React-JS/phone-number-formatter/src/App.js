import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [phone, setPhone] = useState("");
  const [prevPhone, setPrevPhone] = useState("");
  const [check, setCheck] = useState(true);

  const formatPhoneNumberOnInput = (val) => {
    // Remove all non-digits from the phone number
    let phoneNumber = val.replace(/\D/g, "");

    // Format the phone number with parentheses and dashes
    if (phoneNumber.length > 3) {
      phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    if (phoneNumber.length > 9) {
      phoneNumber = `${phoneNumber.slice(0, 9)}-${phoneNumber.slice(9)}`;
    }

    // Update the input field value with the formatted phone number
    if(check){
      setPrevPhone(phoneNumber);
      setCheck(false);
    }
    if(phoneNumber.length > prevPhone.length){
      setPrevPhone(phoneNumber);
    }else if(phoneNumber.length < prevPhone.length){
      phoneNumber = prevPhone.slice(0, -1);
      setPrevPhone(prevPhone.slice(0, -1));
    }
    setPhone(phoneNumber);
    return phoneNumber;
  };
  const handleChange = (event) => {
    const phoneNumber = event.target.value;
    formatPhoneNumberOnInput(phoneNumber);
  };
  useEffect(() => {
    if(check){

    }
    console.log("phone :", phone);
  }, [phone]);

  return (
    <div className="App">
      <div className="container text-center">
        <input
          type="tel"
          id="phone"
          maxLength="16"
          value={phone}
          onChange={handleChange}
          placeholder="mobile number"
          autoComplete="off"
        />
        <div>
          <label htmlFor="phone">(123) 456-7890</label>
        </div>
      </div>
    </div>
  );
}

export default App;
