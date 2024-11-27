import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/AuthSlice";
import UserGreating from "../UserGreating/UserGreating";
import ButtonAuth from "../ButtonAuth/ButtonAuth";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      {isLoggedIn ? <UserGreating /> : <ButtonAuth />}
    </div>
  );
}
