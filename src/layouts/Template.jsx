import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/visuals/ScrollToTop'

function Template () {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Outlet />
      <Footer />
    </>
  )
}

export default Template