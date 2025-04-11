import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css['contact-list']}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, number }) =>
          id && name && number ? (
            <Contact key={id} id={id} name={name} number={number} />
          ) : null
        )
      ) : (
        <li>No contacts to display</li>
      )}
    </ul>
  );
};

export default ContactList;