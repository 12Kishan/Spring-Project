/* eslint-disable no-unused-vars */
import AddBook from "./Components/AddBook";
import AddStudent from "./Components/AddStudent";
import EditBook from "./Components/EditBook";
import ShowBook from "./Components/ShowBook";
import './index.css';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    {/* <AddBook/>
      <ShowBook /> */}

     
        {/* <AddBook /> */}
        <Routes>
          <Route path="/ShowBook" element={<ShowBook/>} />
          <Route path="/AddBook" element={<AddBook/>} />
          <Route path="/EditBook/:id" element={<EditBook/>} />
          <Route path="/kp" element={<AddStudent/>} />
        </Routes>
    
    </>
  );
}

export default App;
