import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components'
import arrowImage from '../../public/svg/arrow.svg'
import mouseImage from '../../public/svg/Mouse.svg'
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
const Wrapper = styled.section` 
/* background: #037a7a; */
 padding: 10vh 0 0 0;
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
    margin: 0;
}
`


const Heading2 = styled.h2`
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 38px;
color: #FFFFFF;
margin-bottom: 0;
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
display: block;
margin-bottom: 25px;
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
const Contwrapper = styled.div`

@media(min-width:1200px){
    max-width: 400px;
}


`
const Mainwrapper = styled.div`
 padding: 5vh 10vw 5vh 10vw;
 @media(min-width:1400px){
   padding: 10vh 15vw;
}
` 
const Imgwrapper = styled.div`
text-align: center;
padding-top: 10vh;
@media(min-width:1200px){
   padding-top: 0;
}
` 
const MouseSpan = styled.div`
margin-top: 15px;

`
export default function Banner() {
    return (
        <Wrapper>
           <Logo>LOGO</Logo>
            
            <Mainwrapper>
               <Contwrapper>
                      <Heading2>No-code token
                           management tools to <span>Visualise</span></Heading2>
                           <SpanContent>Built to empower web3 founders and their communities</SpanContent>
                           <StyledButton >Get Access 
                               <Image src={arrowImage} width={'12px'} height={'11px'} alt='arrow'/>
                           </StyledButton>
                </Contwrapper>
            </Mainwrapper>

                <Imgwrapper>
                     <Image src={mouseImage} width={26} height={40} alt='mouse ' />
                      <MouseSpan>Scroll Down to Join the Darkside</MouseSpan>
                </Imgwrapper>

        </Wrapper>
    );
}

