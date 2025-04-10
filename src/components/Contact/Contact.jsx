import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ user }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(user.id));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>
        {user.name}:<br /> {user.number}
      </p>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}