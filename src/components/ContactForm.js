// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from '@mui/material';

function ContactForm() {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (
    <Card sx={{ Width: '25ch' }}>
      <form style={{ margin: '0.5em 0em' }}>
        <TextField type="text" label="Nama Lengkap" />
        <TextField type="number" label="No. Hp = 08*****" />
        <TextField type="email" label="Email" />
        <TextField type="text" label="Foto" />
        <Button type="submit" variant="outlined" size="small">
          Add New
        </Button>
      </form>
    </Card>
  );
}

export default ContactForm;
