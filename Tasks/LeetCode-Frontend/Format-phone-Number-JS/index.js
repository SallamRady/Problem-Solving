window.onload = () => {
  // Declaration
  let phone = document.getElementById("phone");

  function formatPhoneNumberOnInput() {
    // Remove all non-digits from the phone number
    let phoneNumber = phone.value.replace(/\D/g, "");

    // Format the phone number with parentheses and dashes
    if (phoneNumber.length > 3) {
      phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    if (phoneNumber.length > 9) {
      phoneNumber = `${phoneNumber.slice(0, 9)}-${phoneNumber.slice(9)}`;
    }

    // Update the input field value with the formatted phone number
    console.log(phoneNumber);
    phone.value = phoneNumber;
  }

  phone.addEventListener("input",formatPhoneNumberOnInput);
};
