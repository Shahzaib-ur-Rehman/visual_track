import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';

import arrowImage from '../../public/svg/arrow.svg'
const Wrapper = styled.div` 
    
  `
const Heading = styled.h2`
 color: #fff;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 120%;
> span{
  color: #F9623B;
}
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
background: #282780;
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
const Row = styled.div`
   
    display: flex;
    flex-wrap: wrap;
    align-items: center;

`
const Wrapperdiv = styled.div`
@media (min-width: 992px){
flex: 0 0 auto;
width: 66.66666667%;
}
`
const BtnWrapper = styled.div`
@media (min-width: 992px){
flex: 0 0 auto;
width: 33.33333333%;
text-align: end;
}
`
const SpanWrapper = styled.span`
    
`

const TopSection = styled.div`
background-color: #666;
padding: 8px;
align-items: center;
gap: 0 10px;
display: inline-flex;
margin-bottom: 10px;
border-radius: 20px;
 >span{
    background: #F9623B;
    display: inline-block;
    padding: 4px;
    font-size: 12px;
    border-radius: 60%;
 } 
 >h3{
    font-size: 11px;
    color: #fff;
    display: inline-block;
 }  
`

const Founder: NextPage = () => {


  return (
    <Wrapper >
      
      <ContentWrapper>
      <SpanWrapper> 
         <TopSection>
            <span>
                New
            </span>
            <h4>
              FOLLOW THIS DESIGN
            </h4>
         </TopSection>
         </SpanWrapper> 
         <Row>
          <Wrapperdiv>
            <Heading >
              Join Our <span>Founder</span> Community
            </Heading>
            <SpanContent>
            Not ready for our Token Management solutions and want to connect with
            visionaries shaping the future of Web3? 
            </SpanContent>
          </Wrapperdiv>
          <BtnWrapper>
            <StyledButton>Token Vesting Try Now
              <Image src={arrowImage} width={'12px'} height={'11px'} alt='arrow'/>
            </StyledButton>
          </BtnWrapper>
          </Row>
           </ContentWrapper>
        </Wrapper>

  )
}

export default Founder
