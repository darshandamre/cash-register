// buttons
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");

// input
const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");

// hidden elements
const cashContainer = document.querySelector(".container--cash-given");
const tableContainer = document.querySelector(".container--table");

// error messages
const billError = document.querySelector(".error--bill");
const cashError = document.querySelector(".error--cash");
const lessCashError = document.querySelector(".error--less-cash");

const show = (element) => {
  return (element.style.display = "block");
};
const hide = (element) => {
  return (element.style.display = "none");
};

const calculateChange = (changeToBeReturned) => {
  let notes = [
    [2000, 0],
    [500, 0],
    [100, 0],
    [20, 0],
    [10, 0],
    [5, 0],
    [1, 0],
  ];

  notes.forEach((note) => {
    while (changeToBeReturned != 0 && changeToBeReturned >= note[0]) {
      changeToBeReturned -= note[0];
      note[1] += 1;
    }
  });

  displayChange(notes);
};

const displayChange = (notes) => {
  notes.forEach((note) => {
    if (note[1] > 0) {
      document.getElementById(note[0]).innerHTML = note[1];
    } else {
      document.getElementById(note[0]).innerHTML = "";
    }
  });
};

// event listeners
nextBtn.addEventListener("click", () => {
  let bill = parseInt(billAmount.value);

  if (bill > 0) {
    hide(nextBtn);
    hide(billError);
    show(cashContainer);
  } else {
    return show(billError);
  }
});

checkBtn.addEventListener("click", () => {
  let bill = parseInt(billAmount.value);
  let cash = parseInt(cashGiven.value);

  if (bill > 0) {
    hide(billError);
  } else {
    return show(billError);
  }

  if (cash > 0) {
    hide(cashError);
    show(tableContainer);
  } else {
    return show(cashError);
  }

  if (cash >= bill) {
    hide(lessCashError);
  } else {
    return show(lessCashError);
  }

  calculateChange(cash - bill);
});
