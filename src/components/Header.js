// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

import contactsJSON from '../data/contacts.json';
import Contact from './Contact';
import ContactForm from './ContactForm';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  // import data json
  const [contacts, setContacts] = useState(contactsJSON);

  // fungsi tambah contact
  const addContacts = (newContact) => {
    const newId = contacts[contacts.length - 1].id + 1;

    const ObjContact = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      photo: newContact.photo,
    };

    const newContacts = [...contacts, ObjContact]; //tambah dengan spread
    setContacts(newContacts);
  };

  return (
    <>
      <Typography variant="h3">Call A friend - MiChat</Typography>
      <Typography variant="subtitle1">Your Friendly contact app</Typography>
      <Divider />
      <Grid mt={2} ml={3} container spacing={6}>
        <Grid item xs={6}>
          <ContactForm fnAddContacts={addContacts} />
        </Grid>
        <Grid item xs={6}>
          <Contact contacts={contacts} />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
