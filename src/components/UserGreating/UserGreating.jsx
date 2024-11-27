import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/AuthSlice";

export default function UserGreating() {
  const userName = useSelector(selectUserName);
  return (
    <div>
      <p>Hello, {userName}</p>
    </div>
  );
}
