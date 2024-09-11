import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  // Initialize LocomotiveScroll
  React.useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className='w-screen min-h-screen bg-zinc-900 overflow-hidden text-white font-["satoshi"]'>
      {/* Ensure Navbar and other components are responsive */}
      <Navbar />
      <main className='flex flex-col items-center'>
        <Work className='w-full px-4 py-8 md:px-8 md:py-12' />
        <Stripes className='w-full' />
        <Products className='w-full px-4 py-8 md:px-8 md:py-12' />
        <Marquees className='w-full' />
        <Cards className='w-full px-4 py-8 md:px-8 md:py-12' />
      </main>
      <Footer className='w-full px-4 py-8' />
    </div>
  )
}

export default App
