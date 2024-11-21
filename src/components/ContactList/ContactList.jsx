import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectContacts,
  selectError,
  selectLoading,
  selectVisibleContacts,
} from "../../redux/ContactSlice";
import { selectFilter } from "../../redux/FilterSlice";

export default function ContactList() {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{isError}</h2>}
      {visibleContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </div>
  );
}
``;
