import { useDispatch, useSelector } from "react-redux";
import { selectContactInfo } from "../../redux/contacts/selectors";
import { useState } from "react";
import { addTag } from "../../redux/contacts/operations";
import { useForm } from "react-hook-form";

export const InformContact = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [tag, setTag] = useState("");
  const info = useSelector(selectContactInfo);
  const onSubmit = (data) => {
    dispatch(addTag(info.id, data.value));
    reset();
  };
  return (
    <div className="flex flex-col gap-5 max-w-screen-md mx-auto mt-10 items-center">
      <div className="card card-side bg-base-100 shadow-xl overflow-hidden mt-5 xl:min-w-[700px] sm:w-[100%]">
        <img src={info?.avatar_url} alt="Movie" />
        <div className="card-body">
          <p>{info?.fields["first name"]?.map((i) => i.value)}</p>
          <p>{info?.fields["last name"]?.map((i) => i.value)}</p>
          <p>{info?.fields?.email?.map((i) => i.value)}</p>
        </div>
        {/* {info?.tags?.length ? (
          info?.tags?.map((i) => <p key={i}>{i}</p>)
        ) : (
          <p>Not found tags</p>
        )} */}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered sm:w-[100%] bg-transparent"
          {...register("value")}
        />
        <button className="btn btn-active btn-primary w-56">addTag</button>
      </form>
    </div>
  );
};
