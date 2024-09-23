function finalFunc(
  textValue,
  inputValue,
  totalAmount,
  amountId,
  totalAmountId,
  inputId,
  title
) {
  //   add the amount
  let finalOutput = textValue + inputValue;
  // decrease the amount
  let decreaseAmount = totalAmount - inputValue;

  // show in the dom
  document.getElementById(amountId).innerText = finalOutput;
  document.getElementById(totalAmountId).innerText = decreaseAmount;

  //   history related code
  let historySection = document.getElementById("historySection");

  let rows = `<div class="p-8 border border-gray-300 rounded-md mb-4">
                      <h4 class="text-xl font-bold mb-4">
                        ${inputValue} Taka is ${title}
                      </h4>
                      <p class="text-base font-light text-gray-500">
                        Date : ${new Date().toLocaleDateString()}  Time: ${new Date().toLocaleTimeString()}
                      </p>
                    </div>`;
  historySection.innerHTML += rows;

  //   show the modal
  let modal = document.getElementById("modal");

  modal.classList.remove("hidden");

  document.getElementById(inputId).value = " ";
}

function getInputValueReturnIntoNumber(id) {
  let inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function getTextReturnIntoNumber(id) {
  let textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

function getTextReturnText(id) {
  let text = document.getElementById(id).innerText;
  return text;
}
