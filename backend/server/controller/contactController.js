import asyncHandler from "express-async-handler";
import Contact from "../model/Contact.js";

export const createContact = asyncHandler(async (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    res.status(400);
    throw new Error("Enter name and phone number please");
  }

  const contact = await Contact.create({
    name,
    phone,
  });

  if (!contact) {
    res.status(500);
    throw new Error("Error while creating contact");
  }
  res.status(201).json({
    success: true,
    data: contact,
  });
});

export const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).sort({createdAt: -1});

  if (!contacts) {
    res.status(404);
    throw new Error("No contact found");
  }

  return res.status(200).json({
    success: true,
    count: contacts.length,
    data: contacts,
  });
});

export const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400);
    throw new Error("No id found for contact");
  }

  const contact = await Contact.findOne({ _id: id });

  if (!contact) {
    res.status(404);
    throw new Error("No contact found");
  }
  res.status(200).json({
    success: true,
    data: contact,
  });
});

export const updateContact = asyncHandler(async (req, res) => {
  const { name, phone } = req.body;
  const { id } = req.params;
  const contact = await Contact.findOne({ _id: id });
  if (!contact) {
    res.status(404);
    throw new Error("No Contact found");
  }

  contact.name = name || contact.name;
  contact.phone = phone || contact.phone;

  const newContact = await contact.save();

  res.status(201).json({
    success: true,
    data: newContact,
  });
});

export const deleteContact = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const deleteContact = await Contact.findByIdAndDelete(id);

    if(!deleteContact) {
      res.status(500)
      throw new Error('Contact not deleted')
    }
    res.status(201).json({
      success: true,
      data: deleteContact
    });
});
