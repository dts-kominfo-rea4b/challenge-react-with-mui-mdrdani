// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

function ContactForm(props) {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [inputContact, setContactInfo] = useState({
    photo: 'http://placekitten.com/600',
  });

  // fungsi untuk menerima inputan
  const inputOnChangeHandler = (event) => {
    // setContactInfo(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    setContactInfo((values) => ({ ...values, [name]: value }));
  };

  // fungsi handler
  const formOnSubmitHandler = (event) => {
    event.preventDefault();
    props.fnAddContacts(inputContact);
    setContactInfo('');
  };

  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <form style={{ margin: '0.5em 0em' }} onSubmit={formOnSubmitHandler}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              style={{ marginBottom: '0.5em' }}
              name="name"
              value={inputContact.name || ''}
              onChange={inputOnChangeHandler}
              label="Name *"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="number"
              label="Phone *"
              variant="outlined"
              style={{ marginBottom: '0.5em' }}
              name="phone"
              value={inputContact.phone || ''}
              onChange={inputOnChangeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="email"
              label="Email *"
              variant="outlined"
              style={{ marginBottom: '0.5em' }}
              name="email"
              value={inputContact.email || ''}
              onChange={inputOnChangeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              label="Photo URL *"
              variant="outlined"
              style={{ marginBottom: '0.5em' }}
              name="photo"
              value={inputContact.photo || ''}
              onChange={inputOnChangeHandler}
            />
          </Grid>
          <Button type="submit">Add New</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm;
