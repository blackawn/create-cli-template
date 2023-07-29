import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function RouterGuard() {
  const navigate = useNavigate()

  const [init, setInit] = useState(false)

  useEffect(() => {
    navigate('/layout/home')
    setInit(true)
  }, [navigate])

  return (
    <Outlet />
  )
}