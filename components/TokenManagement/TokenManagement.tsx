import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';

import arrowImage from '../../public/svg/arrow.svg'
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

const TokenManagement: NextPage = () => {


  return (
    <Wrapper >
      <ContentWrapper>
            <Heading >
            Preview Our Token Management Solution
            </Heading>
            <SpanContent>
            Take a test flight to preview our token vesting solution
            </SpanContent>
            <StyledButton>Token Vesting Try Now
            <Image src={arrowImage} width={'12px'} height={'11px'} alt='arrow'/>
            </StyledButton>
        </ContentWrapper>
          </Wrapper>

  )
}

export default TokenManagement
