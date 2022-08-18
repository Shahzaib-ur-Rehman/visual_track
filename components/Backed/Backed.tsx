import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';

import pulsar from '../../public/svg/binance_1.svg'
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

const SliderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0 15px;
    justify-content: center;

    @media (min-width: 768px){

    }
`

const CardWrapper = styled.div`
     
`
const ImgWrapper = styled.div`
  margin-bottom: 15px;
  >img{
  border-radius  : 50%;
  height: 180px;
  width: 180px;
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

const Backed: NextPage = () => {


  return (
    <Wrapper >
      <ContentWrapper>
            <Heading >
            Backed By
            </Heading>

            <SliderWrapper>
               
                     <ImgWrapper>
                       <Image src={pulsar} height="50" width="150" alt="" />
                     </ImgWrapper>
                    
               

               
                     <ImgWrapper>
                     <Image src={pulsar} height="50" width="150" alt="" />
                     </ImgWrapper>
                    
               

               
                     <ImgWrapper>
                       <Image src={pulsar} height="50" width="150" alt="" />
                     </ImgWrapper>
                    
               

               
               
                     <ImgWrapper>
                       <Image src={pulsar} height="50" width="150" alt="" />
                     </ImgWrapper>
                    
               

               
                     <ImgWrapper>
                       <Image src={pulsar} height="50" width="150" alt="" />
                     </ImgWrapper>
               
                 
               
                     <ImgWrapper>
                       <Image src={pulsar} height="50" width="150" alt="" />
                     </ImgWrapper>
               

               
                     <ImgWrapper>
                       <Image src={pulsar} height="50" width="150" alt="" />
                     </ImgWrapper>
               

            </SliderWrapper>
           
        </ContentWrapper>
          </Wrapper>

  )
}

export default Backed
