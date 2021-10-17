import { createAction } from "@reduxjs/toolkit";

export const inputChange = createAction("contact/inputChange");

export const fatchContactsRequest = createAction(
  "contact/fatchContactsRequest"
);
export const fatchContactsSuccess = createAction(
  "contact/fatchContactsSuccess"
);
export const fatchContactsError = createAction("contact/fatchContactsError");

export const setContactRequest = createAction("contact/setContactsRequest");
export const setContactSuccess = createAction("contact/setContactsSucces");
export const setContactError = createAction("contact/setContactsError");

export const deleteContactRequest = createAction(
  "contact/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contact/deleteContactSuccess"
);
export const deleteContactError = createAction("contact/deleteContactError");

// const actions = {
//   handleSubmit,
//   deleteContact,
//   inputChange,
//   fatchContactsRequest,
//   fatchContactsSuccess,
//   fatchContactsError,
//   setContactRequest,
//   setContactSuccess,
//   setContactError,
// };
// export default actions;
