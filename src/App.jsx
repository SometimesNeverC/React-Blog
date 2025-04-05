
import { useRoutes } from 'react-router-dom';
import routes from './routes'
import Nav from './componnets/Nav'


function App() {
  const elements = useRoutes(routes)
  return (
    <div className='total-container'>
      <Nav />
      {elements}
    </div>
  )
}

export default App
