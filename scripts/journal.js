import { getJournalEntries } from "./archive.js";

// // console.log("I'm here to party");

// const jentries = [
//   {
//     id: 1,
//     date: "07/12/2022",
//     concept: "Daily Journal 1",
//     entry: "Flexbox is tricky",
//     mood: "😁 Bussin'",
//   },
//   {
//     id: 2,
//     date: "07/16/2022",
//     concept: "Daily Journal 1",
//     entry: "Tried some cool stuff with CSS",
//     mood: "😁 Bussin'",
//   },
//   {
//     id: 3,
//     date: "07/18/2022",
//     concept: "Github",
//     entry: "Found some cool git commands for when SHTF",
//     mood: "😐 Meh",
//   },
//   {
//     id: 4,
//     date: "07/19/2022",
//     concept: "Yin Yang Project",
//     entry:
//       "Working through getting project structure setup and spliting work responsibility",
//     mood: "🥱 Tired",
//   },
//   {
//     id: 5,
//     date: "07/23/2022",
//     concept: "Yin Yang Project",
//     entry: "Agreed on theme and came together with congruent CSS Theme",
//     mood: "😋 Hungry",
//   },
// ];

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
  console.log(html);
  document.getElementById("entries").innerHTML = html;
};

displayEntries();

// The daily journal currently has HTML, CSS and JavaScript, but the JavaScript is not linked to the HTML. In this part, we are going to refactor the project a bit to:

// 1. Display previous journal entries on the screen.
// 2. Encapsulate our code inside functions.
// 3. Bring the Journal Entries into the JavaScript file from another source.

// Create a loop that console logs each entry independently

// for (const x of entries) {
//   console.log(x);
// }

// for (const x of entries) {
//   console.log(x.entry);
// }

//Create a second loop that only console logs the title of your journal entry

// for (const x of entries) {
//   console.log(x.concept);
// }

//Create a third loop that only console logs entries whose id is an odd number.

// for (const x of entries) {
//   if (x.id % 2 > 0) {
//     console.log(x);
//   }
// }
