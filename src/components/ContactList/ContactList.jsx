import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectVisibleContacts,
} from "../../redux/ContactSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/ContactsOps";

import Contact from "../Contact/Contact";

export default function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
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
