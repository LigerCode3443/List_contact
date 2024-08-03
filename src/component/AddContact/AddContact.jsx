import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export const AddContact = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const contact = {
      id: nanoid(),
      avatar_url:
        "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
      record_type: "person",
      privacy: {
        edit: null,
        read: null,
      },
      tags: "string",
      owner_id: null,
      fields: {
        email: [{ value: data.email, modifier: "", label: "email" }],
        "last name": [
          { value: data.last_name, modifier: "", label: "last name" },
        ],
        "first name": [
          { value: data.first_name, modifier: "", label: "first name" },
        ],
      },
    };
    dispatch(addContact(contact));
    reset();
  };

  return (
    <div className="sticky top-0 z-50 h-screen overflow-y-auto flex flex-col gap-5">
      <h3>Create Contact</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[280px] flex gap-5 flex-col "
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="First name"
            {...register("first_name")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Last name"
            {...register("last_name")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email")}
          />
        </label>
        <button className="btn btn-primary">add</button>
      </form>
    </div>
  );
};
