// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React, { useState } from 'react';

import contactsJSON from '../data/contacts.json';
import ContactForm from './ContactForm';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  const [contacts, setContacts] = useState(contactsJSON);

  return (
    <>
      <h1>Call A friend</h1>
      <span>Your Friendly contact app</span>
      <ContactForm />
    </>
  );
};

export default Header;
