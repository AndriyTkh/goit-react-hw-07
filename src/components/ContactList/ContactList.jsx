import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import { useSelector } from "react-redux";

function FilterContacts(contacts, searchWord) {
  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
  );
}

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const keyWord = useSelector(selectNameFilter);
  const visibleContacts = FilterContacts(contacts, keyWord);

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
