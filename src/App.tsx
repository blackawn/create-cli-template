import { routerConfig } from '@/router'
import { RouterProvider } from 'react-router-dom'
import '@/styles/index.css'

function App() {
  return (
    <RouterProvider
      router={routerConfig}
    />
  )
}

export default App
