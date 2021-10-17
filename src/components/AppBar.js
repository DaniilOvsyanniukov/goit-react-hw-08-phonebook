import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav";
import authSelectors from "../redux/authorization/authorization-selectors";
import s from "./navigations.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <Navigation className={s.header} />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
