
import './App.css'
// import AsideTitle from './Home/Aside/index'
import Portait from './componnets/Portrait';
import Home from './pages/Home/Home'
import { useRoutes } from 'react-router-dom';
import routes from './routes'


function App() {
  const elements = useRoutes(routes)
  return (
    <div className='total-container'>
      {elements}
    </div>
  )
}

export default App
