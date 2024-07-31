import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "./redux/contacts/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route>
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
