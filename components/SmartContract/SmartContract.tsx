import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';

import quantsstamp from '../../public/svg/quantsstamp.svg'
import certik  from '../../public/svg/certik.svg'
const Wrapper = styled.div` 
    text-align: center;
    
  `
const Heading = styled.h2`
 /* background: linear-gradient(90deg, #0DCCF2 -24.73%, #AA00FF 124.6%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text; */
color: #fff;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 120%;
display: inline-block;
@media(min-width:576px){
  font-size: 48px;
  margin-bottom: 7px;
}
  `;

const SpanContent = styled.span`
   
`

const StyledButton = styled.button`
position: relative;
background: linear-gradient(90deg, #0DCCF2 -45%, #AA00FF 127.41%);
 font-size: 1em;
padding: 15px 31px;
height: 51px;
cursor: pointer;
border: 0px;
display: inline-block;
color: #fff;
> span {
    top: 1px;
    right: -10px;
}
`;

const ContentWrapper = styled.div`
  padding: 30px 0px;
  max-width: 75%;
  margin: auto;
  border-bottom: 2px solid rgba(237, 241, 247, 0.5);
  display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 5px;
    flex-wrap: wrap;
  @media (min-width: 1200px){
  padding: 50px 0px;
  gap: 0 20px;
 
    
  }
`

const SmartContract: NextPage = () => {


  return (
    <Wrapper >
      <ContentWrapper>
            <Heading >
            Smart Contract Audited by
            </Heading>
            <SpanContent>
            <Image src={quantsstamp} width={'70px'} height={'70px'} alt='arrow'/>  
            </SpanContent>
            <SpanContent>
            <Image src={certik} width={'70px'} height={'70px'} alt='arrow'/>  
            </SpanContent>
           
        </ContentWrapper>
          </Wrapper>

  )
}

export default SmartContract
