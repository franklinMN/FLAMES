const f_head = document.getElementById("f-header");
const f_main = document.getElementById("f-main");
const f_result = document.getElementById("f-result");

const input1 = document.getElementById("person1");
const input2 = document.getElementById("person2");

async function getInputs() {
  let payload;

  if (input1.value.trim() != "" && input2.value.trim() != "") {
    payload = {
      person1: input1.value,
      person2: input2.value,
    };
  } else {
    alert("Empty inputs, please enter the names.");
    return;
  }

  try {
    const response = await fetch(
      "https://flames-backend-api.onrender.com/flames",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    const res = await response.json();
    console.log(res.result);
    document.querySelector("#f-result p").textContent = res.result;

    f_result.classList.remove("hide");
    f_head.classList.add("hide");
    f_main.classList.add("hide");

    requestAnimationFrame(() => {
      f_result.classList.add("visible");
      f_head.classList.remove("visible");
      f_main.classList.remove("visible");
    });
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to load data, refresh and try again!");
  }
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
