import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';

import plus from '../../public/svg/plus-white.svg'
import minus from '../../public/svg/minus.svg'
const Wrapper = styled.div` 
    text-align: center;
    
  `
const Heading = styled.h2`
color: #fff;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 30px;
margin-bottom: 25px;
@media(min-width:576px){
  font-size: 48px;
  margin-bottom: 40px;
  line-height: 120%;
}
  `;

const SpanContent = styled.div`
     margin-bottom: 15px;
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
  @media (min-width: 1200px){
  padding: 50px 0px;
    
  }
`

const FaqWrapper = styled.div`
   

    @media (min-width: 768px){

    }
`

const CardWrapper = styled.div`
     
`
const Statement = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 text-align: left;
 margin-bottom: 10px;
 padding-bottom: 10px;
 border-bottom: 2px solid #fff;
 >h3{
  font-size: 18px;
  padding-right: 5px;
 }
 >span{
  >img{
    height: 20px;
   width: 20px;
   display: inline-block;
  }
 
 }
 @media (min-width: 992px){
  margin-bottom: 20px;
 padding-bottom: 20px;
 >h3{
  font-size: 23px;
 }
 }
`
const CardContentWrapper = styled.div`
    
`
const PersonName = styled.h3`
    margin-bottom: 5px;
`

const PersonTitle = styled.span`
    display: inline-block;
    color: #666;
`

const Faq: NextPage = () => {


  return (
    <Wrapper >
      <ContentWrapper>
            <Heading >
           Faqs
            </Heading>

            <FaqWrapper>
               
                     <Statement>
                      <h3>What tokens do you currently support?</h3>
                      <span><Image src={plus} width="25px" height="25px" alt="" /></span>
                     </Statement>
                    
               

               
                     <Statement>
                     <h3>Can I create smart contracts for multiple addresses in one go?</h3>
                                          <span><Image src={plus} width="25px" height="25px" alt="" /></span>

                     </Statement>
                    
               

               
                     <Statement>
                     <h3>Are token distributions fully automated or do I still have to manually approve?</h3>
                                          <span><Image src={plus} width="25px" height="25px" alt="" /></span>

                     </Statement>
                    
               

               
               
                     <Statement>
                     <h3>Has VTVL replaced thebacker branding?</h3>
                                          <span><Image src={plus} width="25px" height="25px" alt="" /></span>

                     </Statement>
                    
               

               
                     <Statement>
                     <h3>How much does VTVL cost to use?</h3>
                      <span><Image src={minus} width="25px" height="25px" alt="" /></span>

                     </Statement>
               
                 
               
                     <Statement>
                     <h3>Does VTVL take custody of the tokens?</h3>
                                          <span><Image src={plus} width="25px" height="25px" alt="" /></span>

                     </Statement>
               

               
                     <Statement>
                     <h3>What digital wallets are compatible with the VTVL platform?</h3>
                     <span><Image src={plus} width="25px" height="25px" alt="" /></span>
                     </Statement>
                   
                   

            </FaqWrapper>
           
        </ContentWrapper>
          </Wrapper>

  )
}

export default Faq
