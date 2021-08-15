// buttons
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");

// input
const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");

// hidden elements
const afterNext = document.querySelector(".after-next");
const tableCont = document.querySelector(".container--table");

// error messages
const billError = document.querySelector(".error--bill");
const cashError = document.querySelector(".error--cash");
const lessCashError = document.querySelector(".error--less-cash");

// var bill = parseInt(billAmount.value);
// var cash = parseInt(cashGiven.value);

nextBtn.addEventListener("click", () => {
  let bill = parseInt(billAmount.value);

  if (bill > 0) {
    nextBtn.style.display = "none";
    billError.style.display = "none";
    afterNext.style.display = "block";
  } else {
    billError.style.display = "block";
  }
});

checkBtn.addEventListener("click", () => {
  let bill = parseInt(billAmount.value);
  let cash = parseInt(cashGiven.value);

  if (bill > 0) {
    billError.style.display = "none";
  } else {
    return (billError.style.display = "block"); //show error
  }

  if (cash > 0) {
    cashError.style.display = "none";
    tableCont.style.display = "block";
  } else {
    return (cashError.style.display = "block"); //show error
  }

  if (cash > bill) {
    lessCashError.style.display = "none";
  } else {
    return (lessCashError.style.display = "block"); //show error
  }
});
