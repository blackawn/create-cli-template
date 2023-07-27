import { Outlet, useNavigate } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { useEffect,useState } from 'react'

export default function RouterGuard() {
  const navigate = useNavigate()

  const [init, setInit] = useState(false)

  useEffect(() => {
    navigate('/shared/home')
    setInit(true)
  }, [navigate])

  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark'
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Outlet />
    </MantineProvider>
  )
}