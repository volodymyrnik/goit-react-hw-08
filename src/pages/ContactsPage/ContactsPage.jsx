import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    console.log("Fetching contacts...");
    dispatch(fetchContacts());
  }, [dispatch]); // ✅ закриваємо useEffect

  return (
    <div className={css["contacts-container"]}>
      <h1 className={css["page-title"]}>Your contacts</h1>
      <div className={css["contact-editor"]}>
        <ContactsForm />
      </div>
      <div className={css["loading-message"]}>
        {isLoading && "Request in progress..."}
      </div>
      <SearchBox />
      <ContactList />
    </div>
  );
}