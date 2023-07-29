import { routerConfig } from '@/router'
import { RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import '@/styles/index.css'

function App() {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark'
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <RouterProvider
        router={routerConfig}
      />
    </MantineProvider>
  )
}

export default App
