import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import StickyHeader from '../components/StickyHeader/StickyHeader'
import SupportingProjects from '../components/SupportingProjects/SupportingProjects'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Banner/Navbar'
const Home: NextPage = () => {
  return (
    <div>
     <StickyHeader/>
     <Navbar/>
     <div className={styles.bannerimage}>
     <Banner/>
     </div>
    </div>
  )
}

export default Home
