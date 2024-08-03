import { ListContact } from "../../component/ListContacts/ListContact";
import { AddContact } from "../../component/AddContact/AddContact";

export const Home = () => {
  return (
    <div className="flex gap-10 relative w-[1280px] px-5 mx-[auto] mt-10">
      <AddContact />
      <ListContact />
    </div>
  );
};
