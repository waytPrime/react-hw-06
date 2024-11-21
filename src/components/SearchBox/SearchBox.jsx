import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/FilterSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter.filter);
  console.log(filter);

  const filterChange = (e) => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div>
      <input type="text" value={filter} onChange={filterChange} />
    </div>
  );
}
