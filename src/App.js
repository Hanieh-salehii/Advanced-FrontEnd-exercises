import { Route, Routes, useLocation } from "react-router";
import { CONTACT_US_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PAYMENT_RESULT_ROUTE, RESERVATION_ROUTE, RESERVED_LIST_ROUTE, SIGNIN_ROUTE } from "./constant/rout";
import Home from "./pages/home";
import Login from "./pages/login";
import ReservedList from "./pages/reserved-list";
import NotFound from "./pages/not-found";
import Reservation from "./pages/reservation";
import Header from "./components/Header";
import PaymentResult from "./pages/payment-result";
import ContactUs from "./pages/contact-us";

function App() {
  const location = useLocation();
  const isLoginSignin = location.pathname.includes(LOGIN_ROUTE)||location.pathname.includes(SIGNIN_ROUTE);
  // console.log(isLoginSignin);
  
  return (
    <>
      {!isLoginSignin && <Header/>}
      <Routes>
        <Route path={HOME_ROUTE} element={<Home/>} />
        <Route path={LOGIN_ROUTE} element={<Login/>} />
        <Route path={SIGNIN_ROUTE} element={<Login/>} />
        <Route path={RESERVED_LIST_ROUTE} element={<ReservedList/>} />
        <Route path={RESERVATION_ROUTE} element={<Reservation/>} />
        <Route path={PAYMENT_RESULT_ROUTE} element={<PaymentResult/>} />
        <Route path={CONTACT_US_ROUTE} element={<ContactUs/>} />
        <Route path={"*"} element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
