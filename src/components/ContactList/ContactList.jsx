import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectVisibleContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.containerContactList}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.contactItem}>
          <Contact user={contact} />
        </li>
      ))}
    </ul>
  );
}