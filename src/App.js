import { Container } from "@mui/material";
import { Route, Routes } from "react-router";
import { LOGIN_ROUTE, NOT_FOUND_ROUTE, RESERVED_LIST_ROUTE } from "./constant/rout";
import Home from "./pages/home";
import Login from "./pages/login";
import Reserved_list from "./pages/reserved-list";
import Not_found from "./pages/not-found";
import Reservation from "./pages/reservation";
import Payment_result from "./pages/payment-result";

function App() {
  return (
    <Container>
      <p>Start coding babe</p>
      <Routes>
        <Route path={HOME_ROUTE} element={Home} />
        <Route path={LOGIN_ROUTE} element={Login} />
        <Route path={RESERVED_LIST_ROUTE} element={Reserved_list} />
        <Route path={RESERVATION_ROUTE} element={Reservation} />
        <Route path={PAYMENT_RESULT_ROUTE} element={Payment_result} />
        <Route path={NOT_FOUND_ROUTE} element={Not_found} />
      </Routes>
    </Container>
  );
}

export default App;
