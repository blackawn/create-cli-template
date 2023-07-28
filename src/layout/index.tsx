import Header from '@/layout/Header'
import Aside from '@/layout/Aside'
import Main from '@/layout/Main'
import Footer from '@/layout/Footer'

export default function Shared() {
  return (
    <div
      className='flex h-screen w-screen'
    >
      <Aside />
      <div
        className='flex flex-1 flex-col'
      >
        <Header />
        <div
          className='flex-1'
        >
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  )
}