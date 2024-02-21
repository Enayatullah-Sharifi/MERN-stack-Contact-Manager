import { createSlice } from "@reduxjs/toolkit";

const contactSlicer = createSlice({
  name: "contact",
  initialState: {
    contacts: [],
    serchQuery: "",
  },
  reducers: {
    getContacts: (state, action) => {
      //   console.log(action.payload.data);
      state.contacts = action.payload.data.map((contact) => ({
        _id: contact._id,
        name: contact.name,
        phone: contact.phone,
      }));
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload.data);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact._id !== action.payload.data._id
      );
    },
    updateContact: (state, action) => {
      // console.log(action.payload.data._id);
      const index = state.contacts.findIndex(
        (contact) => contact._id === action.payload.data._id
      );
      state.contacts[index].name = action.payload.data.name;
      state.contacts[index].phone = action.payload.data.phone;
    },
    searchContact: (state, action) => {
      state.serchQuery = action.payload;
    },
  },
});

export default contactSlicer.reducer;
export const {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
  searchContact,
} = contactSlicer.actions;
