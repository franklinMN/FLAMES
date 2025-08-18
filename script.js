import { calculateFlames } from "./logic.js";

const f_head = document.getElementById("f-header");
const f_main = document.getElementById("f-main");
const f_result = document.getElementById("f-result");

const input1 = document.getElementById("person1");
const input2 = document.getElementById("person2");

function getInputs() {
  let person1, person2;

  if (input1.value.trim() != "" && input2.value.trim() != "") {
    person1 = input1.value;
    person2 = input2.value;
  } else {
    alert("Empty inputs, please enter the names.");
    return;
  }

  const res = calculateFlames(person1, person2);

  document.querySelector("#f-result p").textContent = res;

  f_result.classList.remove("hide");
  f_head.classList.add("hide");
  f_main.classList.add("hide");

  requestAnimationFrame(() => {
    f_result.classList.add("visible");
    f_head.classList.remove("visible");
    f_main.classList.remove("visible");
  });
}

//submit
const submit = document.getElementById("submit");
submit.addEventListener("click", getInputs);

function refreshContainer() {
  f_result.classList.remove("visible");
  f_head.classList.add("visible");
  f_main.classList.add("visible");

  requestAnimationFrame(() => {
    f_head.classList.remove("hide");
    f_result.classList.add("hide");
    f_main.classList.remove("hide");
  });
  input1.value = "";
  input2.value = "";
}

const retry_icon = document.getElementById("retry-icon");
retry_icon.addEventListener("click", refreshContainer);
