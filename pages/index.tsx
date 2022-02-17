import type { NextPage } from 'next'
import Bookings from '../components/Booking'
import Companies from '../components/Companies'
import Destinations from '../components/Destinations'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'
import Subscription from '../components/Subscription'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <div className='floating_1' />
      <div className='floating_2' />
      <Header />
      <Services />
      <Destinations />
      <Bookings />
      <Companies />
      <Subscription />
      <Footer />
    </div>
  )
}

export default Home
