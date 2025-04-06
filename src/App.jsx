
import { useRoutes } from 'react-router-dom';
import routes from './routes'
import Nav from './componnets/Nav'
import './App.css'


function App() {
  const elements = useRoutes(routes)
  return (
    <div className='total-container'>
      <div className='Navigate_menu'>
        <Nav />
      </div>
      <div className='main_container'>
        {elements}
      </div>
      
    </div>
  )
}

export default App
