import React from 'react';
import Carousel from "./Carousel";
import{makeStyles, Container, Typography } from "@material-ui/core";

const useStyles=makeStyles(() => ({
 banner:{
     backgroundImage:"url(./banner2.jpg)",
 },
 bannerContent:{
     height:400,
     display:"flex",
     flexDirection:"column",
     paddingTop:25,
     justifyContent:"space-around",
 },
 tagline:{
     display:"flex",
     flexDirection:"column",
     height:"40%",
     textAlign:"center",
     justifyContent:"center",
 },
}));
const Banner = () => {
  const classes =useStyles();
  return( 
    <div className={classes.banner}> 
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight:"bold",
              marginBottom:15,
              fontFamily:"Montserrat",
            }}
          >
            Crypto-Hunt           
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color:"darkgrey",
              textTransform:"capitalize",
              fontFamily:"Montserrat",
            }}
          >
            Get all the Info regarding to your favorite Crypto Currency            
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
