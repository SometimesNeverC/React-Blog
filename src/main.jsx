import { StrictMode } from 'react'
import { ReactDOM, createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const Router = BrowserRouter

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)
