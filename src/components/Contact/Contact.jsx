import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/ContactsOps";

export default function Contact({ contact: { name, numberPhone, id } }) {
  const dispatch = useDispatch();
  
  const deleteContactButton = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact}>
      <h2>Contact</h2>
      <p>{name}</p>
      <p>{numberPhone}</p>
      <button onClick={() => deleteContactButton(id)}>Delete</button>
    </div>
  );
}
