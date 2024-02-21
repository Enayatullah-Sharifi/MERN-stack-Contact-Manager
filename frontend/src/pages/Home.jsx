import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";
import Card from "../component/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/features/contactSlicer";

function Home() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contacts);
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get("http://localhost:5000");
      dispatch(getContacts(response.data));
    };

    fetchContacts();
  }, []);
  return (
    <>
      <Header />

      <div className="container main ">
        {contacts &&
          contacts.map((contact) => <Card key={contact._id} {...contact} />)}
      </div>

      <Footer />
    </>
  );
}

export default Home;
