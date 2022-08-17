import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SteaperComponent from "./Stepper";
import styled from "styled-components";

const ImageWrapper = styled.div`
  background: #d9d9d9;
  max-width: 464px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  @screen (min-width: 992px){
    width: 464px;
    height: 497px;
  }
`;

const ImagePlaceholder = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 38px;
  color: #000000;
  @screen (min-width: 992px){
    font-size: 51px;
  line-height: 51px;
  }
`;
const TextWrapper = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  text-align: center;
  color: #ffffff;
  @screen (min-width: 992px){
  font-size: 50px;
  line-height: 59px;
  padding: 100px;


  }
  > span{
  
  }
`;
const Wrapper =  styled.section`
background: linear-gradient(165deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(40,195,227,0.9920343137254902) 100%, rgba(0,212,255,1) 100%);
`
export default function HowItWorks() {
  return (
   <Wrapper>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding="50px">
        <Grid item xs={12} md={12} lg={4} margin="auto">
          <SteaperComponent />
        </Grid>
        <Grid item xs={12} md={12} lg={4} margin="auto">
          <ImageWrapper>
            <ImagePlaceholder>Placeholder image</ImagePlaceholder>
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} md={12} lg={4} margin="auto">
          <TextWrapper><span>100% </span>No Code, ready in minutes</TextWrapper>
        </Grid>
      </Grid>
    </Box>
   </Wrapper>
  );
}
