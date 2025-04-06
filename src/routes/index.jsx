import Home from '../pages/Home/'
import About from '../pages/About/'
import Blog from '../pages/Blog/'
import Article from '../pages/Article/'
import NotFound from '../pages/NotFound/'
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