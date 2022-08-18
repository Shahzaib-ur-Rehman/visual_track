import type { NextPage } from 'next'
import styled from 'styled-components';
import Slider from "react-slick";
import Image1 from '../../public/images/image1.jpg'
import Image2 from '../../public/images/image2.jpg'
import Image3 from '../../public/images/image3.jpg'
import Image from 'next/image';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
const Wrapper = styled.div` 
    text-align: center;
    
  `
   export const settings = {
    dots: true,
    arrows:false,
    appendDots: (dots: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined)=> (
        <div
          style={{
            color: "orange"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
  };

const SliderComponent: NextPage = () => {


  return (
    <Wrapper >
       <Slider {...settings}>
          <div>
            <Image src={Image1} width={500} height={500} alt="image"/>
          </div>
          <div>
            <Image src={Image2} width={500} height={500} alt="image"/>
          </div>
          <div>
            <Image src={Image3} width={500} height={500} alt="image"/>
          </div>
          
        </Slider>
          </Wrapper>

  )
}

export default SliderComponent
