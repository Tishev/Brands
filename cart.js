"use strict";

const productItem = document.querySelector("#item-cart");
const closeBtnItem = document.querySelector("#btn-close");
const productItem2 = document.querySelector("#item-cart2");
const closeBtnItem2 = document.querySelector("#btn-close2");
closeBtnItem.addEventListener("click", function () {
  console.log("ckc");
  productItem.classList.add("hidden");
});
closeBtnItem2.addEventListener("click", function () {
  console.log("ckc");
  productItem2.classList.add("hidden");
});
