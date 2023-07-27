import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'

export default function RouterGuard() {
  const navigate = useNavigate()

  const [init, setInit] = useState(false)

  useEffect(() => {
    navigate('/shared/home')
    setInit(true)
  }, [navigate])

  return (
    <div>
      <Outlet />
    </div>
  )
}