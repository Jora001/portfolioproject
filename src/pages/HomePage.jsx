import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ButtonComponent from '../components/ButtonComponent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
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

    // Your form submission logic goes here
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("https://catherineasquithgallery.com/uploads/posts/2021-03/1614724648_144-p-foni-dlya-lendinga-168.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <Container>
          <HeaderComponent title="Welcome to Our Beautiful Website" />
          <Typography variant="h5" gutterBottom>
            Discover Amazing Features
          </Typography>
          <Typography variant="body1" paragraph>
            Explore the innovative features of our platform designed to meet your needs. We prioritize simplicity and
            functionality.
          </Typography>
          <ButtonComponent label="Get Started" onClick={() => alert('Getting started!')} />
        </Container>
      </div>

     

      <Container
        style={{
          marginTop: '32px',
          marginBottom: '32px',
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <img src="https://cdn-icons-png.flaticon.com/128/10215/10215240.png" alt="logo" style={{ width: '50px' }} />
                <Typography variant="h6" gutterBottom>
                  Startup Solutions
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales semper urna, vel rhoncus neque
                  congue ac.
                </Typography>
                <input
                  type="button"
                  value="Read more"
                  style={{
                    width: '80px',
                    height: '30px',
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <img src="https://cdn-icons-png.flaticon.com/128/1968/1968666.png" alt="logo" style={{ width: '50px' }} />
                <Typography variant="h6" gutterBottom>
                  Digital Marketing
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Fusce suscipit libero eu augue rhoncus, id malesuada risus malesuada. Curabitur facilisis aliquet
                  fermentum.
                </Typography>
                <input
                  type="button"
                  value="Read more"
                  style={{
                    width: '80px',
                    height: '30px',
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <img src="https://cdn-icons-png.flaticon.com/128/7991/7991055.png" alt="logo" style={{ width: '50px' }} />
                <Typography variant="h6" gutterBottom>
                  Web Development
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Sed eu orci et sem convallis porta. Quisque tristique, arcu vel fermentum malesuada, velit libero
                  ullamcorper odio.
                </Typography>
                <input
                  type="button"
                  value="Read more"
                  style={{
                    width: '80px',
                    height: '30px',
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container
        style={{
          marginTop: '32px',
          marginBottom: '32px',
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <img src="https://cdn-icons-png.flaticon.com/128/8644/8644474.png" alt="logo"  style={{ width: '50px' }}  />
                <Typography variant="h6" gutterBottom>
                  SEO Optimization
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales semper urna, vel rhoncus neque
                  congue ac.
                </Typography>
                <input
                  type="button"
                  value="Read more"
                  style={{
                    width: '80px',
                    height: '30px',
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <img src="https://cdn-icons-png.flaticon.com/128/2645/2645725.png" alt="logo" style={{ width: '50px' }} />
                <Typography variant="h6" gutterBottom>
                  Mobile Development
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Fusce suscipit libero eu augue rhoncus, id malesuada risus malesuada. Curabitur facilisis aliquet
                  fermentum.
                </Typography>
                <input
                  type="button"
                  value="Read more"
                  style={{
                    width: '80px',
                    height: '30px',
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <img src="https://cdn-icons-png.flaticon.com/128/9692/9692936.png" alt="logo" style={{ width: '50px' }} />
                <Typography variant="h6" gutterBottom>
                  Networking Services
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Sed eu orci et sem convallis porta. Quisque tristique, arcu vel fermentum malesuada, velit libero
                  ullamcorper odio.
                </Typography>
                <input
                  type="button"
                  value="Read more"
                  style={{
                    width: '80px',
                    height: '30px',
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '5px',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>


      <Container
        style={{
          marginTop: '32px',
          marginBottom: '32px',
        }}
      ><br />
      <br />
     <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img src="https://deveho.com/wp-content/uploads/2021/12/deveho-cloud-supportt-solution.jpg" alt="logo" style={{ width: '500px',borderRadius:'50px' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleFormSubmit}>
              <Typography variant="h5" gutterBottom>
                Our The Mission
              </Typography>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem iste, est numquam optio doloribus sequi explicabo rerum nesciunt ducimus accusantium tempora quam nemo, tempore, expedita nostrum.  dolor sit amet consectetur adipisicing elit. Vero numquam Eveniet sit beatae deleniti.</p>
                
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos deleniti corporis natus cupiditate qui neque mollitia quaerat quia delectus. Corrupti aut magnam maxime  dolor sit amet consectetur adipisicing elit. Vero numquam illo error beatae obcaecati praesentium esse architecto!</p>
             <br />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam ea nobis nihil ut, cumque, dolor sit amet consectetur  dolor sit amet consectetur adipisicing elit. Vero numquam adipisicing  dolor sit amet consectetur adipisicing elit. Vero numquam elit. Vero numquam deserunt dolorem voluptas blanditiis ex quis tenetur officia ratione quae illum molestiae at ab consequatur.</p>
              <input
                type="submit"
                value="Submit"
                style={{
                  width: '80px',
                  height: '30px',
                  backgroundColor: '#007bff',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  marginTop: '16px',
                }}
              />
            </form>
          </Grid>
        </Grid>
      </Container>
      <footer style={{ backgroundColor: '#007bff', padding: '20px 0', marginTop: '32px' }}>
      <Container>
        <Typography variant="body2" align="center" color="textSecondary">
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </Typography>
      </Container>
      
    </footer>
    
    </div>
    
  );
};

export default HomePage
