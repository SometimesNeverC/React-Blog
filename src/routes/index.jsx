import Home from '../pages/Home/index.jsx'
import About from '../pages/About/index.jsx'
import Blog from '../pages/Blog/index.jsx'
import Article from '../pages/Article/index.jsx'
import NotFound from '../pages/NotFound/index.jsx'
import { createBrowserRouter,createHashRouter } from 'react-router-dom'


const routes = ([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />,
    children:[

    ],
  },
  {
    path:'/blog',
    element: <Blog />,
    children:[],
  },
  {
    path:'/article',
    element: <Article />,
    children:[],
  },
  {
    path:'/contact',
    element: <></>

  },
  {
    path:'/testimonials',
    element: <></>
  },
  {
    path:'*',
    element: <NotFound />
  }

])

export default routes