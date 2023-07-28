import { Outlet } from 'react-router-dom'

export default function Main() {

  return (
    <div
      className='flex items-center justify-center'
    >
      <Outlet />
    </div>
  )
}
