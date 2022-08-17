import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components'
import arrowImage from '../../public/svg/arrow.svg'
import mouseImage from '../../public/svg/Mouse.svg'
import Image from 'next/image';
const Wrapper = styled.section` 
/* background: #037a7a; */
padding: 10px 20px;
@media(min-width:576px){
    /* padding: 0px 80px; */

}
`
const Logo = styled.h1`
    display: none;
    @media(min-width:768px){
        font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 57px;
    line-height: 58px;
    color: #FFFFFF;
    display: block;
    text-align: center;
    text-transform: uppercase;

}
`


const Heading2 = styled.h2`
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 1;
color: #FFFFFF;
> span  {
    background: linear-gradient(90deg, #0DCCF2 -24.73%, #AA00FF 124.6%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

}
@media(min-width:576px){
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 56px;
color: #FFFFFF;

}
`

const SpanContent = styled.span` 
display: block;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 39px;
color: #FFFFFF;
`

const StyledButton = styled.button`
position: relative;
  background: linear-gradient(90deg, #0DCCF2 -45%, #AA00FF 127.41%);
  font-size: 1em;
  padding: 15px 31px;
  width: 180px;
height: 51px;
cursor: pointer;
border: 0px;
color: #fff;
> span {
    top: 1px;
    right: -10px;
}
`;

const MouseSpan = styled.div``
export default function Banner() {
    return (
        <Wrapper>
            <Box sx={{ flexGrow: 1 }} >
                <Logo>LOGO</Logo>
               
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} >
                        <Heading2>No-code token
                            management tools to <span>Visualise</span></Heading2>
                            <SpanContent>Built to empower web3 founders and their communities</SpanContent>
                            <StyledButton >Get Access 
                                <Image src={arrowImage} width={'12px'} height={'11px'} alt='arrow'/>
                            </StyledButton>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} >
                        
                    </Grid>

                </Grid>
                <Grid container spacing={2} margin="auto" textAlign={'center'}>
                    <Grid item xs={12} sm={12} md={12} >
                       <Image src={mouseImage} width={26} height={40} alt='mouse ' />
                       <MouseSpan>Scroll Down to Join the Darkside</MouseSpan>
                    </Grid>
                    

                </Grid>
            </Box>
        </Wrapper>
    );
}

