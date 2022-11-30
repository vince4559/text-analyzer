import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import Context from './components/Context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Context>
      <App />
    </Context>
    </ChakraProvider>
  </React.StrictMode>
)
