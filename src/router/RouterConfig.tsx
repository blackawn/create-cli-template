import { createHashRouter } from 'react-router-dom'
import { lazy } from 'react'
import Home from '@/pages/home'
import Login from '@/pages/login'
import RouterGuard from './RouterGuard'

const LazyShared = lazy(() => import('@/shared'))

const Config = createHashRouter([
  {
    path: '/',
    element: <RouterGuard />,
    children: [
      {
        path: 'shared',
        element: <LazyShared />,
        children: [
          {
            path: 'home',
            element: <Home />
          },
          {
            path: 'login',
            element: <Login />
          },
        ]
      }
    ]
  }
])

export default Config