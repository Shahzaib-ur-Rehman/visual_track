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
margin-bottom: 15px;
@media(min-width:576px){
  font-size: 48px;
  margin-bottom: 35px;
}
  `;

const SpanContent = styled.div`
     margin-bottom: 15px;
     font-size: 34px;
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
@media (min-width: 768px){
flex: 0 0 auto;
width: 66.66666667%;
}
`
const FormWrapper = styled.div`
text-align: left;
>span{
  margin-bottom: 10px;
  display: inline-block;
}
>input{
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: none;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  outline: none;
  border: none;
  border-bottom: 1px solid #fff;
}
@media (min-width: 768px){
flex: 0 0 auto;
width: 33.33333333%;
text-align: left;
}
`
const SpanWrapper = styled.span`
    
`

const TopSection = styled.div`
padding: 8px;
align-items: center;
gap: 0 10px;
display: inline-flex;
margin-bottom: 10px;
border-radius: 20px;
 >span{
    background: #7962F9;
    display: inline-block;
    padding: 4px;
    font-size: 12px;
    border-radius: 60%;
 } 
 >h3{
    font-size: 12px;
    color: #fff;
    display: inline-block;
 }  
`
const Detail = styled.div`
  margin-top: 30px;
`
const Wrappeerdiv = styled.div`
 display: flex;
 justify-content: space-between;
 margin-bottom: 20px;
`

const CopyRight = styled.div`
text-align: center;
padding-bottom: 20px;
font-size: 16px;
`


const Founder: NextPage = () => {


  return (
    <Wrapper >
      
      <ContentWrapper>
         <Row>
          <Wrapperdiv>
            <Heading >
              Fuel for Thought
            </Heading>
            <SpanContent>
              LOGO
            </SpanContent>
          </Wrapperdiv>
          <FormWrapper>
             <span>Want access to the latest news in Web3? Sign up for our Newsletter here:</span>
              <input type="text" placeholder='Your email address'  />
              <Detail>
                 <Wrappeerdiv>
                  <span>Careers</span> 
                  <div>Stay in Touch</div>
                 </Wrappeerdiv>
                 <Wrappeerdiv>
                  <span>Terms</span> 
                  <div>Icons</div>
                 </Wrappeerdiv>
              </Detail>
          </FormWrapper>
          </Row>
           </ContentWrapper>
           <CopyRight>
              © 2022 VTVL, Inc. All Rights Reserved. 
           </CopyRight>
        </Wrapper>

  )
}

export default Founder
