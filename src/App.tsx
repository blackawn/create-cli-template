import Header from '@/shared/Header'
import Sidebar from '@/shared/Sidebar'
import Main from '@/shared/Main'
import Footer from '@/shared/Footer'

function App () {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='flex flex-1 flex-col'>
        <Header />
        <div className='flex-1'>
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
