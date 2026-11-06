const api = "https://api.exchangerate-api.com/v4/latest/USD";

// Get elements from the page
const amount = document.querySelector("#amount");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const result = document.querySelector("#result");
const resultValue = document.querySelector("#resultValue");

let rates = {}; // will store all exchange rates

// 1. Get rates from the API when the page loads
fetch(api)
  .then((response) => response.json())
  .then((data) => {
    rates = data.rates;

    // Add every currency to both dropdowns
    for (let code in rates) {
      from.innerHTML += `<option value="${code}">${code}</option>`;
      to.innerHTML += `<option value="${code}">${code}</option>`;
    }
  });

// 2. Convert logic (a named, reusable function)
function convert() {
  // If anything is missing, hide the result and stop
  if (amount.value === "" || from.value === "" || to.value === "") {
    result.classList.add("hidden");
    return;
  }

  // Do the math: convert to USD first, then to the target currency
  const answer = (amount.value / rates[from.value]) * rates[to.value];

  resultValue.textContent = answer.toFixed(2) + " " + to.value;
  resultValue.className = "text-2xl font-semibold text-emerald-600";
  result.classList.remove("hidden");
}

// 3. Run convert() whenever something changes
amount.addEventListener("input", convert);
from.addEventListener("change", convert);
to.addEventListener("change", convert);
document.querySelector("#convert").addEventListener("click", convert);

// 4. Swap button
document.querySelector("#swap").addEventListener("click", () => {
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
  convert(); // re-convert after swapping
});

// 5. Reset button
document.querySelector("#reset").addEventListener("click", () => {
  amount.value = "";
  from.value = "";
  to.value = "";
  result.classList.add("hidden");
});