import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "./redux/contacts/operations";
import { Home } from "./pages/Home/Home";
import { InformContact } from "./pages/InformContact/InformContact";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <div className="sm:w-[400px] xl:w-[1280px] px-5 mx-auto">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/contact/:id" element={<InformContact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
