import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import App from './App.tsx'
import { Theme, Flex, Container } from '@radix-ui/themes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Theme
  appearance='dark'
  accentColor="grass"
  grayColor="gray"
  panelBackground="solid"
  scaling="100%"
  radius="large"
  >
  <Flex
  direction='row'
  gap="2"
  justify="center"
  align="center"
  >
  
  <Flex direction="column" gap="3" align="center" justify="center" maxWidth="52rem">
    <App />
  </Flex>

  </Flex>
  </Theme>
  </StrictMode>,
)
