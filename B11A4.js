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



