import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import ProfileCard from './ProfileCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileCard />
  </StrictMode>,
)
