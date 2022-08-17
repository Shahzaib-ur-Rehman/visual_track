import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SteaperComponent from "./Stepper";
import styled from "styled-components";

const ImageWrapper = styled.div`
  background: #d9d9d9;
  width: 464px;
  height: 497px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const ImagePlaceholder = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 51px;
  line-height: 58px;
  color: #000000;
`;
const TextWrapper = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 50px;
  line-height: 59px;
  text-align: center;
  color: #ffffff;
  padding: 100px;
  > span{
    display: block;
  }
`;

export default function HowItWorks() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding="50px">
        <Grid item xs={8} md={4} margin="auto">
          <SteaperComponent />
        </Grid>
        <Grid item xs={8} md={4} margin="auto">
          <ImageWrapper>
            <ImagePlaceholder>Placeholder image</ImagePlaceholder>
          </ImageWrapper>
        </Grid>
        <Grid item xs={8} md={4} margin="auto">
          <TextWrapper><span>100% </span>No Code, ready in minutes</TextWrapper>
        </Grid>
      </Grid>
    </Box>
  );
}
