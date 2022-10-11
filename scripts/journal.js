import { getEntries } from "./data.js";

// return html to main.js
export const journalHTML = async () => {
  const entries = getEntries();
  let html = "";
  for (let i = 0; i < entries.length; i++) {
    html += `<div class="single">
    <p id="conceptjs">${entries[i].concept}</p>
      <p>${entries[i].date}</p>
      <p>${entries[i].mood}</p>
      <p class="cardEntry">${entries[i].entry}</p>
    </div>`;
  }

  document.getElementById("entries").innerHTML = html;
};
