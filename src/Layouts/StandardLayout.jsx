import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";

export default function StandardLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </>
  );
}