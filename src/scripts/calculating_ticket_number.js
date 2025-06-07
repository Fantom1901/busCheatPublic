function calculateDaysDifference(firstTimestamp, secondTimestamp) {
  const baseTimestamp = Math.floor(secondTimestamp);
  const timeDifferenceSeconds = firstTimestamp - baseTimestamp;
  const daysDifference = Math.floor(timeDifferenceSeconds / 86400);
  return daysDifference;
}

const startTicketNumber = 1009065676;
const dateNow = Date.now() / 1000;
const baseDate = 1742940000;

const finalCalculatedCode = calculateDaysDifference(dateNow, baseDate) * 379281 + startTicketNumber;

function formatNumberWithSpaces(number) {
  const numStr = Math.floor(number).toString();
  let formattedNumber = "";

  for (let i = numStr.length - 1; i >= 0; i--) {
    formattedNumber = numStr[i] + formattedNumber;
    if ((numStr.length - 1 - i) % 3 === 2 && i !== 0) {
      formattedNumber = " " + formattedNumber;
    }
  }
  return formattedNumber;
}

const codeDisplay = document.getElementById("codeDisplay");
codeDisplay.textContent = formatNumberWithSpaces(finalCalculatedCode);