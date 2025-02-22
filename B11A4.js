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
/*Problem 04*/
function validProposal(person1, person2) {
  if (
    typeof person1 !== "object" ||
    typeof person2 !== "object" ||
    Array.isArray(person1) ||
    Array.isArray(person2) ||
    person1 === null ||
    person2 === null
  ) {
    return "Invalid";
  }
  let ageDif = Math.abs(person1.age - person2.age);
  if (ageDif <= 7 && person1.gender !== person2.gender) {
    return true;
  } else {
    return false;
  }
}
/*Problem 05 */
function calculateSleepTime(times) {
  let totalSeconds = 0;
  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    totalSeconds += time;
  }
  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds % 3600) / 60);
  let second = totalSeconds % 60;
  let totalSleepTime = { hour: hour, minute: minute, second: second };
  return totalSleepTime;
}
