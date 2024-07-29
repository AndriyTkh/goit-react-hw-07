import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";

/* function FilterContacts(contacts, searchWord) {
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
  );
} */

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactBox}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
}
