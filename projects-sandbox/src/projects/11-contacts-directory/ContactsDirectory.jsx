import React, { useRef, useEffect, useState } from "react";
import Title from "./../components/Title";
import Contacts from "./contact-data.json";
import ContactCard from "./ContactCard";

export default function ContactsDirectory() {
  let searchInputRef = useRef(null);
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);
  const [searchKey, setSearchKey] = useState("");
  return (
    <>
      <div>
        <Title text="Contacts Directory" />
        <input type="text" name="search" id="search_bar" placeholder="Search by First Name" className="text-bar my-4" ref={searchInputRef} onChange={(e) => setSearchKey(e.target.value)} />
      </div>
      <section className="d-flex justify-content-center flex-wrap" style={{ gap: 15 }}>
        {Contacts.filter((contact) => {
          if (searchKey === "") return contact;
          else if (contact.first_name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())) {
            return contact;
          }
        }).map((contact) => (
          <ContactCard contact={contact} />
        ))}
      </section>
    </>
  );
}
