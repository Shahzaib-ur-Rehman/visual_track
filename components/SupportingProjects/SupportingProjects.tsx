import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';
import EthereumImage from '../../public/images/project1.png'
import Polygon from '../../public/images/project3.png'
import Binance from '../../public/images/project2.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Wrapper = styled.div` 
    text-align: center;
  `
const Heading = styled.h2`
 background: linear-gradient(90deg, #0DCCF2 -24.73%, #AA00FF 124.6%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 120%;
@media(min-width:576px){
  font-size: 48px;

}
  `;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px 50px;

  `


const SupportingProjects: NextPage = () => {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} margin={'auto'}>
          <Wrapper >
            <Heading >
              Supporting Projects On
            </Heading>
          </Wrapper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContentWrapper>
            <Image src={EthereumImage} width={160} height={40} alt="e" />
            <Image src={Binance} width={160} height={40} alt="e" />
            <Image src={Polygon} width={160} height={40} alt="e" />
          </ContentWrapper>
        </Grid>

      </Grid>
    </Box>

  )
}

export default SupportingProjects
