import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Spinner from "./components/Loader/Loader";
import { Toaster } from "react-hot-toast";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="appContainer">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <Toaster position="top-right" />
      <Spinner loading={loading} />
      {error && <b>Something wrong! Please, try again!</b>}

      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;