// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from '@mui/material';
// import { ImageIcon } from '@mui/icons-material/Image';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
function Contact(props) {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.contacts.map((
        contact //asumsi nama props yang di lempar adalah datas
      ) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar src={contact.photo} alt="image" />
          </ListItemAvatar>
          <ListItemText
            primary={contact.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'block' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {contact.phone}
                </Typography>

                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {contact.email}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default Contact;
