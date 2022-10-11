const applicationState = {
  entries: [], // an empty array by design
};

const API = "http://localhost:8000";

//to go to API and fetch entries from database
export const fetchEntries = async () => {
  let response = await fetch(`${API}/entries`);
  let data = await response.json();
  // Store the external state in application state
  applicationState.entries = data;
};

// make a copy of entries that are in current application state
export const getEntries = () => {
  return applicationState.entries.map((entry) => ({ ...entry }));
};

//Add a new entry
export const addNewEntry = async (entryObj) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entryObj),
  };

  const response = await fetch(`${API}/entries`, fetchOptions);
  //handle response
  const jsonResponse = await response.json();
  document.dispatchEvent(new CustomEvent("stateChanged"));
  return response;
};

export const deleteRequest = async (id) => {
  await fetch(`${API}/requests/${id}`, { method: "DELETE" });
  mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
};

// to post new information via api to database
/*
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userServiceRequest),
    };

    return fetch(`${API}/requests`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

*/
