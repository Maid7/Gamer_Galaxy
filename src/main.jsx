import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalState } from './context/index.jsx'
 
// extend the theme
const colors = {
   cyan: {
     900: "#065666",
     800: "#086F83",
     700: "#0987A0"

   }
}

const fonts = {
  body : 'Tahoma',
  heading: "Courier New"
}

const theme = extendTheme({colors,fonts})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
    <GlobalState>
    <App /> 
    </GlobalState>
    
    </BrowserRouter>
   
  </ChakraProvider>
)
