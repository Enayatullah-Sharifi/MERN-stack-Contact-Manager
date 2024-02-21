import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/features/contactSlicer";
import { toast } from "react-toastify";

function Card(props) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    const response = await axios.delete(`http://localhost:5000/${props._id}`);
    dispatch(deleteContact(response.data));
    toast.error("Contact deleted Successfully");
  };

  return (
    <>
      <div className="card my-2">
        <div className="card-body">
          <div className="card-text">
            <p>{props.name}</p>
            <span>{props.phone}</span>
          </div>
          <div className="card-footer">
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
            <Link to={`/edit/${props._id}`} className="btn btn-success mx-2">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
