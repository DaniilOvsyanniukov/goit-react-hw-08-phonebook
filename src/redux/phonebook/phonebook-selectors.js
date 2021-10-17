const getcontacts = (state) => state.contacts.contacts;
const getinputValue = (state) => state.contacts.inputValue;
const getVisibleContacts = (state) => {
  const inputValue = getinputValue(state);
  const contacts = getcontacts(state);
  if (contacts.length === 0) {
    return;
  } else {
    console.log(inputValue);
    console.log(contacts);
    const normalizedFilter = inputValue.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
};

const selectors = { getcontacts, getinputValue, getVisibleContacts };

export default selectors;
