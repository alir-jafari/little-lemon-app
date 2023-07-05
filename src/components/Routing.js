import { Routes, Route } from "react-router-dom";
import React , {useState} from 'react';
import About from "./pages/About";
import Reservations from './subpages/Reservations';
import Main from "./Main";
// import Order from "./pages/Order";
// import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import Menu from "./pages/Menu";
import MyReservations from "./subpages/MyReservations";
import Login from "./pages/Login";

export default function Routing() {
  const [fields, setFields] = useState([]);

  const fieldsForm = React.useCallback(
    (fields) => {
      setFields([fields]);
    },
    [fields]
  );
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations fieldsForm={fieldsForm} />} />
      <Route path="/myreservations" element={<MyReservations fields={fields} />} />
      <Route path="/confirmation" element={<Confirmation  fields={fields} />} />
      <Route path="/login" element={<Login  />} />

      {/* <Route path="/order" element={<Order />} />
      

      <Route path="/confirmation" element={<Confirmation />} /> */}
    </Routes>
  );
}
