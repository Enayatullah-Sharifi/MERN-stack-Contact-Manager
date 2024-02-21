import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { updateContact } from "../redux/features/contactSlicer";
import { toast } from "react-toastify";


function Update() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams();
  const contact = useSelector((state) => state.contactReducer.contacts);
  const foundContact = contact.find((c) => c._id === id);
  const [data, setData] = useState(foundContact);

  const { name, phone } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = async(e) => {
    e.preventDefault()
    const response = await axios.put(`http://localhost:5000/${id}`, data)
    if(response.status === 201) {
      dispatch(updateContact(response.data))
      toast.info('Contact updated successfully')
      navigate('/')
    }
    // console.log(response.status)
  }

  return (
    <>
      <Header />
      <div className="container text-center py-5">
        <h1 className="form-title">Update contact</h1>
        <form onSubmit={handleUpdate}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Update;
