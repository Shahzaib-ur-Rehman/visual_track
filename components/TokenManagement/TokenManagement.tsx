import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';

import arrowImage from '../../public/svg/arrow.svg'
const Wrapper = styled.div` 
    text-align: center;
    padding: 30px 0px;
  `
const Heading = styled.h2`
 background: linear-gradient(90deg, #0DCCF2 -24.73%, #AA00FF 124.6%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 120%;
@media(min-width:576px){
  font-size: 48px;

}
  `;

const SpanContent = styled.div`
        line-height: 40px;
`

const StyledButton = styled.button`
position: relative;
  background: linear-gradient(90deg, #0DCCF2 -45%, #AA00FF 127.41%);
  font-size: 1em;
  padding: 15px 31px;
height: 51px;
cursor: pointer;
border: 0px;
color: #fff;
> span {
    top: 1px;
    right: -10px;
}
`;

const TokenManagement: NextPage = () => {


  return (
    <Wrapper >
            <Heading >
            Preview Our Token Management Solution
            </Heading>
            <SpanContent>
            Take a test flight to preview our token vesting solution
            </SpanContent>
            <StyledButton>Token Vesting Try Now
            <Image src={arrowImage} width={'12px'} height={'11px'} alt='arrow'/>
            </StyledButton>
          </Wrapper>

  )
}

export default TokenManagement
