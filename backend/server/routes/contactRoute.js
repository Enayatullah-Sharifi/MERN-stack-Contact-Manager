import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from "../controller/contactController.js";
import express from "express";
const router = express.Router();

router.route("/").post(createContact).get(getContacts);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

export default router;
