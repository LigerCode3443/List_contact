import { useDispatch, useSelector } from "react-redux";
import { selectContactInfo } from "../../redux/contacts/selectors";
import { useState } from "react";
import { addTag } from "../../redux/contacts/operations";

export const InformContact = () => {
  const dispatch = useDispatch();
  const [tag, setTag] = useState("");
  const info = useSelector(selectContactInfo);
  console.log(info);
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <img src={info?.avatar_url} alt="Movie" />
        <div className="card-body">
          <p>{info?.fields["first name"].map((i) => i.value)}</p>
          <p>{info?.fields["last name"].map((i) => i.value)}</p>
          <p>{info?.fields.email.map((i) => i.value)}</p>
        </div>
        {/* {info?.tags?.length ? (
          info?.tags?.map((i) => <p key={i}>{i}</p>)
        ) : (
          <p>Not found tags</p>
        )} */}
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs bg-transparent"
        onChange={(e) => {
          e.preventDefault;
          setTag(e.target.value);
        }}
      />
      <button
        className="btn btn-active btn-primary"
        onClick={() => {
          dispatch(
            addTag(info.id, {
              tags: [tag],
            })
          );
        }}
      >
        Primary
      </button>
    </>
  );
};
