import Portait from '../componnets/Portrait/index.jsx'
import About from '../pages/About/index.jsx'
import Home from '../pages/Home/Home.jsx'


const routes = [
  {
    path:'/',
    element:<Portait/>
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  }
]

export default routes