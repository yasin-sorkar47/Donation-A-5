//Noakhali donation button event
function handleClick() {
  // get the input value
  let inputValue = getInputValueReturnIntoNumber("donation-input");

  //   get the text value
  let textValue = getTextReturnIntoNumber("amount");

  let totalAmount = getTextReturnIntoNumber("totalAmount");
  let title = getTextReturnText("title");

  //   validate the input
  if (inputValue <= 0 || isNaN(inputValue)) {
    alert("please enter a valid number.");
    return;
  }

  if (inputValue > totalAmount) {
    alert("you do not have enough money.");
    return;
  }

  finalFunc(
    textValue,
    inputValue,
    totalAmount,
    "amount",
    "totalAmount",
    "donation-input",
    title
  );
}

// feni donation button event
function handleClickForFeni() {
  // get the input value
  let inputValue = getInputValueReturnIntoNumber("donation-input-feni");

  //   get the text value
  let textValue = getTextReturnIntoNumber("amount-feni");

  let totalAmount = getTextReturnIntoNumber("totalAmount");
  let title = getTextReturnText("title-feni");

  //   validate the input
  if (inputValue <= 0 || isNaN(inputValue)) {
    alert("please enter a valid number.");
    return;
  }

  if (inputValue > totalAmount) {
    alert("you do not have enough money.");
    return;
  }

  finalFunc(
    textValue,
    inputValue,
    totalAmount,
    "amount-feni",
    "totalAmount",
    "donation-input-feni",
    title
  );
}

// movement handleClick
function movementClick() {
  // get the input value
  let inputValue = getInputValueReturnIntoNumber("movementInput");

  //   get the text value
  let textValue = getTextReturnIntoNumber("movementAmount");

  let totalAmount = getTextReturnIntoNumber("totalAmount");
  let title = getTextReturnText("movementtitle");

  //   validate the input
  if (inputValue <= 0 || isNaN(inputValue)) {
    alert("please enter a valid number.");
    return;
  }

  if (inputValue > totalAmount) {
    alert("you do not have enough money.");
    return;
  }

  finalFunc(
    textValue,
    inputValue,
    totalAmount,
    "movementAmount",
    "totalAmount",
    "movementInput",
    title
  );
}

// close modal
document.getElementById("close").addEventListener("click", function () {
  let modal = document.getElementById("modal");
  modal.classList.add("hidden");
});

// history related script
function handleHistoryClick() {
  let donationBtn = document.getElementById("donationBtn");
  let getHistoryBtn = document.getElementById("historyBtn");
  getHistoryBtn.classList.add("bg-primary", "text-gray-900");
  getHistoryBtn.classList.remove("text-gray-500", "border", "border-gray-200");
  donationBtn.classList.remove("bg-primary", "text-gray-900");
  donationBtn.classList.add("text-gray-500", "border", "border-gray-200");

  // show the history in the dom
  let historySection = document.getElementById("historySection");
  historySection.classList.remove("hidden");

  // hide the donate card section
  let cardSection = document.getElementById("cardSection");
  cardSection.classList.add("hidden");
}

// donation related script
function handleDonationClick() {
  let donationBtn = document.getElementById("donationBtn");
  let getHistoryBtn = document.getElementById("historyBtn");
  donationBtn.classList.add("bg-primary", "text-gray-900");
  donationBtn.classList.remove("text-gray-500", "border", "border-gray-200");
  getHistoryBtn.classList.remove("bg-primary", "text-gray-900");
  getHistoryBtn.classList.add("text-gray-500", "border", "border-gray-200");

  // show the history in the dom
  let historySection = document.getElementById("historySection");
  historySection.classList.add("hidden");

  // hide the donate card section
  let cardSection = document.getElementById("cardSection");
  cardSection.classList.remove("hidden");
}
