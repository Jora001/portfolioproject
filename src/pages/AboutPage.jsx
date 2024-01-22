import React, { useState, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ButtonComponent from '../components/ButtonComponent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';

const AboutPage = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const slideshowImages = [
    'url("https://workathomesmart.com/wp-content/uploads/2019/07/online-proofreading-jobs-from-home1.jpg")',
    'url("https://www.realestatevirtualassistant.com.au/wp-content/uploads/2022/07/What-Influences-A-Virtual-Assistant-Hourly-Rate.jpg")',

    'url("https://cafejavas.co.ug/assets/front/images/feedback.jpg")',
  ];

  const sections = [
    {
      title: 'Our Mission',
      content: 'At OurWebsite, our mission is to provide innovative solutions that...',
      image: 'https://cdn-icons-png.flaticon.com/128/9539/9539805.png' , 
    },
    {
      title: 'Services',
      content: 'We offer a wide range of services, including web development, digital marketing, and more.',
      image: 'https://cdn-icons-png.flaticon.com/128/3631/3631163.png', 
    },
    {
      title: 'Team',
      content: 'Meet our talented and dedicated team. We believe in collaboration and excellence.',
      image: 'https://cdn-icons-png.flaticon.com/128/7829/7829198.png', 
    },
    {
      title: 'Testimonials',
      content: 'Read what our clients are saying about us. Customer satisfaction is our top priority.',
      image: 'https://cdn-icons-png.flaticon.com/128/2013/2013695.png',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 
    2000); 

    return () => clearInterval(intervalId);
  }, [imageIndex]);

  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#000000',
        textAlign: 'center',
      }}
    >

      <Grid minWidth="100%" style={{
        backgroundImage: slideshowImages[imageIndex],
        minHeight: "400px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px"

      }}

        justifyContent="center"
        alignItems="center"
      >

        <HeaderComponent title="About Page" />
        <Typography variant="body1" paragraph>
          This is the about page. It provides information about the application and its purpose.
        </Typography>
        <ButtonComponent label="Learn More" onClick={() => alert('Learn more button clicked!')} />


      </Grid>
      <Container>


        {sections.map((section, index) => (
          <Card key={index} style={{ marginTop: '32px' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {section.content}
              </Typography>
              {section.image && (
                <img src={section.image} alt={`Section ${index + 1}`} style={{ width: '50px', borderRadius: '8px' }} />
              )}
            </CardContent>
          </Card>
        ))}
      </Container>




      
      <Container
        style={{
          marginTop: '32px',
          marginBottom: '32px',
        }}
      >
        <h1>Our Team</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            
            <Card>
              
              <CardContent>
                <img src="https://avatars.mds.yandex.net/i?id=4f1403350826b39cb8bd8ef47c451758468e2a06-5669278-images-thumbs&n=13" alt="logo" style={{ width: '340px' }} />
                <Typography variant="h6" gutterBottom>
                Robert Young </Typography>
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
                    color: '#F8F2F2',
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
                <img src="https://validcognition.com/wp-content/uploads/2014/08/Joyful-man-face-1200x796.jpg" alt="logo" style={{ width: '340px' }} />
                <Typography variant="h6" gutterBottom>
                Joseph Wright
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
                <img src="https://www.scsfleetservices.com/wp-content/uploads/2012/07/post-img6.jpg" alt="logo" style={{ width: '340px' }} />
                <Typography variant="h6" gutterBottom>
                Kevin Torres
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
                <img src="https://mylitta.ru/uploads/posts/2020-04/1587990496_image-stylists-5.jpg" alt="logo" style={{ width: '340px' }} />
                <Typography variant="h6" gutterBottom>
                Melissa Kourtney
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
                <img src="https://www.shkolazhizni.ru/img/content/i184/184121_big.jpg" alt="logo" style={{ width: '340px' }} />
                <Typography variant="h6" gutterBottom>
                Rebecca Maddison
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
                <img src="https://i.hobbygaiety.com/images/007/image-20156-3-j.webp" alt="logo" style={{ width: '340px' }} />
                <Typography variant="h6" gutterBottom>
                Angela	 Royce
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

export default AboutPage;
