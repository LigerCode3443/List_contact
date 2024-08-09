import { ContactCard } from "../ContactCard/ContactCard";

export const ListContact = () => {
  return (
    <ul className="flex flex-col gap-5 xl:min-w-[558px]">
      <ContactCard />
    </ul>
  );
};
