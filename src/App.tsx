import Header from '@/shared/Header'
import Aside from '@/shared/Aside'
import Main from '@/shared/Main'
import Footer from '@/shared/Footer'

function App () {
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

export default App
