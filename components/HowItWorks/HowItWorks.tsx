import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';

import arrowImage from '../../public/svg/arrow.svg'
import SliderComponent from './Slider';
const Wrapper = styled.div` 
    text-align: center;
    
  `
const Heading = styled.h2`
 color:#fff;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 120%;
@media(min-width:576px){
  font-size: 48px;
  margin-bottom: 7px;
}
  `;

const SpanContent = styled.div`
     margin-bottom: 15px;
`

const StyledButton = styled.button`
position: relative;
background: #F9623B;
border-radius: 50px;
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
  @media (min-width: 1200px){
  padding: 50px 0px;
    
  }
`
const SliderWrapper = styled.div`
padding: 30px 0px;
`
const Heading2 = styled.h4`
  font-weight: 700;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #FFFFFF;
`
const SpanContent1 = styled.span`
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
line-height: 30px;
font-size: 14px;

text-align: center;

color: #CFCFCF;
`
const HowItWorks: NextPage = () => {


  return (
    <Wrapper >
      <ContentWrapper>
            <Heading >
            How it Works
            </Heading>
            <SpanContent>
            100% No Code, ready in minutes
            </SpanContent>
           <SliderComponent/>
           <SliderWrapper>
           <Heading2 >
           Mint or Bring Your Own Token
            </Heading2>
            <SpanContent1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor suscipit sagittis.
            </SpanContent1>
           </SliderWrapper>
        </ContentWrapper>
          </Wrapper>

  )
}

export default HowItWorks
