/* eslint-disable no-unused-vars */
import AddBook from "./Components/AddBook";
import ShowBook from "./Components/ShowBook";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    {/* <AddBook/>
      <ShowBook /> */}

     
        {/* <AddBook /> */}
        <Routes>
          <Route path="/kp" element={<ShowBook/>} />
        </Routes>
    
    </>
  );
}

export default App;
