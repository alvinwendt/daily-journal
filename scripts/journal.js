import { getJournalEntries } from "./archive.js";

const displayEntries = () => {
  const jentries = getJournalEntries();
  let html = "";
  for (let i = 0; i < jentries.length; i++) {
    html += `<div class="single">
      <p>${jentries[i].concept}</p>
      <p>${jentries[i].date}</p>
      <p>${jentries[i].mood}</p>
      <p>${jentries[i].entry}</p>
    </div>`;
  }

  document.getElementById("entries").innerHTML = html;
};

displayEntries();
