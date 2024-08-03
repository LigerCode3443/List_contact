import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { deleteContact, getContactInfo } from "../../redux/contacts/operations";
import { Link } from "react-router-dom";
import { BtnDelete } from "../BtnDelete/BtnDelete";

export const ContactCard = () => {
  const dispatch = useDispatch();
  const { resources } = useSelector(selectContacts);

  return (
    <>
      {resources?.map(({ avatar_url, fields, id }) => (
        <li
          key={id}
          className="card card-side bg-base-100 shadow-xl relative overflow-hidden"
        >
          <Link to={`contact/:${id}`}>
            {" "}
            <img
              src={avatar_url}
              alt=""
              onClick={() => {
                dispatch(getContactInfo(id));
              }}
            />
          </Link>
          <div className="card-body">
            {" "}
            <p>{fields["first name"]?.map((i) => i.value)}</p>
            <p>{fields["last name"]?.map((i) => i.value)}</p>
            <p>{fields.email?.map((i) => i.value)}</p>
          </div>

          <button
            className="absolute top-3 right-2"
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <BtnDelete />
          </button>
        </li>
      ))}
    </>
  );
};
