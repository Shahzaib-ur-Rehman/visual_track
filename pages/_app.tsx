
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  typography:{
    fontFamily:'Roboto'
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return  <ThemeProvider theme={theme}>
 <Component {...pageProps} />
</ThemeProvider>
  
  
}

export default MyApp
