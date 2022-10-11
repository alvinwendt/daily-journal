import { addNewEntry } from "./data.js";

// Return this as a function
export const renderForm = () => {
  let formSection = `<div>
      <h1>Alvin's NSS Daily Journal</h1>
    </div>
    <main id="container">
        </main><form>
        <fieldset>
          <strong><label>Date of Entry</label></strong>
          <input name="date" id="date" type="date" placeholder="date" />
        </fieldset>

        <fieldset>
          <strong><label for="concepts">Concepts Covered</label></strong>
          <input name="concepts" id="concepts" type="text" placeholder="List the concepts" />
        </fieldset>

        <fieldset>
          <strong><label>Journal Entry</label></strong>
          <textarea name="textoutput" id="entry" placeholder="Let's talk about it" rows="8" cols="50"></textarea>
        </fieldset>

        <fieldset>
          <strong><label>Mood for the Day</label></strong>
          <select name="mood" id="mood">
            <option>Select mood</option>
            <option>😁 Bussin'</option>
            <option>😖 Disgustin'</option>
            <option>😐 Meh</option>
            <option>🤪 Fun</option>
            <option>😢 Sad</option>
            <option>🥱 Tired</option>
            <option>😋 Hungry</option>
          </select>
        </fieldset>

        <button id="submit" type="button">
          <strong>Record Journal Entry</strong>
        </button>
      </form>`;

  document.getElementById("formEntry").innerHTML = formSection;
};

document.addEventListener("click", (e) => {
  if (e.target.id === "submit") {
    const entryDate = document.querySelector("input[name=date]")?.value;
    const entryConcept = document.querySelector("input[name=concepts]")?.value;
    const entryText = document.querySelector(
      "textarea[name=textoutput]"
    )?.value;
    const entryMood = document.querySelector("select[name=mood]")?.value;
    console.log(entryDate, entryConcept, entryText, entryMood);
    const newObj = {
      date: entryDate,
      concept: entryConcept,
      entry: entryText,
      mood: entryMood,
    };
    addNewEntry(newObj);
  }
});
