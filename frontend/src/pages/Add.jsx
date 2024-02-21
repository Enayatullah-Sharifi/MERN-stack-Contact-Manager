import { useState } from "react";
import Header from "../component/Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/features/contactSlicer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Add() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const { name, phone } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000", {
      name: formData.name,
      phone: formData.phone,
    });
    dispatch(addContact(response.data));
    if (response.status === 201) {
      navigate("/");
      toast.success("Contact added successfully");
    }
  };

  return (
    <>
      <Header />
      <div className="container text-center py-5">
        <h1 className="form-title">Add new contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              required
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group my-2">
            <input
              type="number"
              placeholder="Phone number"
              className="form-control"
              required
              name="phone"
              value={phone}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group my-2">
            <button type="submit" className="form-control btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
