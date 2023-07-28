import { createHashRouter } from 'react-router-dom'
import { lazy } from 'react'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import RouterGuard from './RouterGuard'

const LazyShared = lazy(() => import('@/layout'))

const Config = createHashRouter([
  {
    path: '/',
    element: <RouterGuard />,
    children: [
      {
        path: 'layout',
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