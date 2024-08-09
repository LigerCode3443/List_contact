import { ListContact } from "../../component/ListContacts/ListContact";
import { AddContact } from "../../component/AddContact/AddContact";

export const Home = () => {
  return (
    <div className="flex gap-10 mt-10 justify-center items-start sm:flex-col xl:flex-row">
      <AddContact />
      <ListContact />
    </div>
  );
};
