import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchContact } from "../redux/features/contactSlicer";
import { FaSearch } from "react-icons/fa";

function SearchDetail(props) {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.contactReducer.serchQuery);
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const [data, setData] = useState();
  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fetchData = (e) => {
    dispatch(searchContact(e.target.value));
    setData(filterContact);
  };

  return (
    <>
      <header className="bg-primary text-light ">
        <div className="container d-flex justify-content-between align-items-center py-1 px-5">
          <Link to="/">
            <h1 className="logo">LOGO</h1>
          </Link>

          <div className="form d-flex p-1 bg-light align-items-center">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search Contact"
              value={searchQuery}
              onChange={(e) => fetchData(e)}
            />
            <FaSearch className="text-dark" />
          </div>

          <ul>
            <Link to="/add" className="fw-bold">
              New Contact
            </Link>
          </ul>
        </div>
      </header>

      <div className="container serch-container">
        {data &&
          data.map((contact) => (
            <div className="card my-5 " key={contact._id}>
              <div className="card-body">
                <div className="card-text">
                  <p>{contact.name}</p>
                  <span>{contact.phone}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchDetail;
