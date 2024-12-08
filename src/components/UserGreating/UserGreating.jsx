import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/AuthSlice";
import { logoutUser } from "../../redux/AuthOps";

export default function UserGreating() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const handleSubmit = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <p>Hello, {userName}</p>
      <button onClick={handleSubmit}>LogOut</button>
    </div>
  );
}
