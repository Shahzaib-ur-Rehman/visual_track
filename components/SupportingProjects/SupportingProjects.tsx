import type { NextPage } from 'next'
import styled from 'styled-components';
import Image from 'next/image';
import Binance from '../../public/svg/binance.svg'
import Polygon from '../../public/svg/polygon.svg'
import corns from '../../public/svg/corns.svg'
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
font-size: 20px;
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
    <Box sx={{ flexGrow: 1 }} paddingY="40px">
      <Grid container spacing={2}>
        <Grid item xs={8} md={12}  margin={'auto'}>
          <Wrapper >
            <Heading >
              Supporting Projects On
            </Heading>
          </Wrapper>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{textAlign:'center', padding:"30px 100px"}} >
        <Grid item xs={12} md={3} margin="auto"  >
        <Image src={Binance} width={160} height={40} alt="e" />
        </Grid>
        <Grid item xs={12} md={3} >
        <Image src={Polygon} width={160} height={40} alt="e" />
        </Grid>
        <Grid item xs={12} md={3} >
        <Image src={Binance} width={160} height={40} alt="e" />
        </Grid>
        <Grid item xs={12} md={3} >
        <Image src={corns} width={160} height={40} alt="e" />
        </Grid>

        
        

      </Grid>
    </Box>

  )
}

export default SupportingProjects
