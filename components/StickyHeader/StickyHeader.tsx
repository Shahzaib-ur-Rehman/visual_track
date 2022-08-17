import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';
import ArrowImage from '../../public/svg/arrow.svg'
import corssSvg from "../../public/svg/crosssvg.svg";
const Wrapper = styled.div` 
  background:linear-gradient(90deg, #0DCCF2 -24.73%, #AA00FF 124.6%);
  text-align:center;
  padding:10px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  `
const Heading = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* line-height: 19px; */
  position: relative;
  display: inline;
  > span{
    top: 3px;
    right: -10px;
  }
  @media (min-width: 576px) {
    font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  > span{
    top: 3px;
    right: -10px;
  }
  }

  `;
const CrossArrowWrapper = styled.span`
  position: absolute;
  right: 15px;
`

const StickyHeader: NextPage = () => {


  return (
    <Wrapper >
      <Heading >
      Join Our Waiting List  I  Token Management Platform from Mint to Moon 
      <Image src={ArrowImage} width={7} height={14} alt="arrow" />
      </Heading>
      <CrossArrowWrapper>
      <Image src={corssSvg} width={22} height={22} alt="arrow" />
      </CrossArrowWrapper>
    </Wrapper>
  )
}

export default StickyHeader
