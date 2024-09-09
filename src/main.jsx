import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './Hello'
import Grid from './Grid'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grid/>
    <Hello/>
  </StrictMode>,
)
