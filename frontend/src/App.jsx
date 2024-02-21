import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Update from "./pages/Update";
import SearchDetail from "./pages/SearchDetail";
import { ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Update />} />
          <Route path="/search" element={<SearchDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
