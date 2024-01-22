import { Grid, TextField, Typography, Paper, useScrollTrigger, Zoom, Fab } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { Container } from "@mui/system";
import { useState } from "react";

function ScrollTop({ children }) {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </div>
    </Zoom>
  );
}

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    alert('Form submitted successfully!');
  };

  const customers = [
    { name: 'Customer 1', image: 'https://cutesolution.com/html/techvio/assets/img/partner/client-4.png' },
    { name: 'Customer 2', image: 'url_to_image_2.jpg' },
    { name: 'Customer 3', image: 'url_to_image_3.jpg' },
  ];

  return (
    <Container style={{ width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <img
        src="https://www.miamidade.gov/resources/images/banners/communications2.jpg"
        alt="Map"
        style={{ width: '100%', borderRadius: '8px', marginTop: '16px' }}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setFormErrors((prevErrors) => ({ ...prevErrors, name: undefined }));
              }}
              error={Boolean(formErrors.name)}
              helperText={formErrors.name}
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setFormErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
              }}
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setFormErrors((prevErrors) => ({ ...prevErrors, message: undefined }));
              }}
              error={Boolean(formErrors.message)}
              helperText={formErrors.message}
              margin="normal"
            />
            <IconButton type="submit" color="primary">
              <SendIcon />
            </IconButton>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://www.shutterstock.com/image-photo/contact-us-customer-support-hotline-600nw-2067737414.jpg"
            alt="Feature"
            style={{ width: '100%', height: '50vh', borderRadius: '8px', marginTop: '35px' }}
          />
        </Grid>
        <Grid item xs={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96671.56227953231!2d43.75783226176688!3d40.78431487058631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb8b9b34fc9f%3A0x4f4bed0e45f99102!2sGyumri!5e0!3m2!1sen!2sam"
            style={{
              width: "100%",
              height: "50vh",
            }}
          ></iframe>
        
  <Typography variant="h5" gutterBottom>
      <strong>Phone:</strong> +123 456 7890     <strong>Email:</strong> info@example.com


  </Typography>
 
 
  <Typography variant="body1" paragraph>
    <strong>Address:</strong> 123 Street, Cityville, Country     <strong>Postal Code:</strong> 12345

  </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Our Customers
          </Typography>
          <Grid container spacing={2}>
            {customers.map((customer, index) => (
              <Grid item xs={4} key={index}>
                <Paper elevation={3} style={{ padding: '10px', textAlign: 'center' }}>
                  <img src={"https://cutesolution.com/html/techvio/assets/img/partner/client-2.png"} alt={customer.name} style={{ width: '100%', borderRadius: '50%' }} />
                  <Typography variant="body2" style={{ marginTop: '8px' }}>
                    {customer.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid> <br /><br />
      <Grid item xs={12}>
 

</Grid>

      <footer style={{ backgroundColor: '#007bff', padding: '20px 0', marginTop: '32px' }}>
        <Container>
          <Typography variant="body2" align="center" color="textSecondary">
            © {new Date().getFullYear()} Your Website Name. All rights reserved.
            
          </Typography>
          
        </Container>
        
      </footer>
      <ScrollTop>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <SendIcon />
        </Fab>
      </ScrollTop>
    </Container>
  );
}

export default Contact;
