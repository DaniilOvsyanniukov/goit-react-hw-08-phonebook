import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  inputChange,
  fatchContactsRequest,
  fatchContactsSuccess,
  fatchContactsError,
  setContactRequest,
  setContactSuccess,
  setContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./phonebook-actions";

const isLoading = createReducer(false, {
  [fatchContactsRequest]: () => true,
  [fatchContactsSuccess]: () => false,
  [fatchContactsError]: () => false,
  [setContactRequest]: () => true,
  [setContactSuccess]: () => false,
  [setContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const contactReducer = createReducer([], {
  [fatchContactsSuccess]: (_, { payload }) => payload,
  [setContactSuccess]: (state, { payload }) => {
    console.log(state);
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contacts) => !contacts.id.includes(payload)),
});

const inputValueReducer = createReducer("", {
  [inputChange]: (_, { payload }) => payload,
});
const error = createReducer(null, {});

export default combineReducers({
  contacts: contactReducer,
  inputValue: inputValueReducer,
  isLoading,
  error,
});
