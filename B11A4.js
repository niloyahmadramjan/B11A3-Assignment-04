/*Problem 01 */
function calculateVAT(price) {
  if (typeof price === "number" && 0 < price) {
    const vat = 7.5;
    const vatAmount = (price * vat) / 100;
    return vatAmount;
  } else {
    return "Invalid";
  }
}

/*Problem 02 */
function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  } else if (
    contact.length === 11 &&
    contact.includes() !== " " &&
    contact.slice(0, 2) == "01"
  ) {
    return true;
  } else {
    return false;
  }
}

/*Problem 03*/
function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let upto50 = [];
  let downto50 = [];
  for (let mark of marks) {
    if (mark >= 50) {
      upto50.push(mark);
    } else if (mark <= 49) {
      downto50.push(mark);
    }
  }
  return upto50.length > downto50.length;
}
