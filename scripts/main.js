import { fetchEntries } from "./data.js";
import { journalHTML } from "./journal.js";
import { renderForm } from "./form.js";

const render = async () => {
  await fetchEntries();
  renderForm();
  journalHTML();
};

render();

document.addEventListener("stateChanged", (CustomEvent) => {
  render();
});
