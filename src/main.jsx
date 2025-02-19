import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GithubProfileApp } from './GithubProfileApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GithubProfileApp />
  </StrictMode>,
)
