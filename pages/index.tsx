import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import StickyHeader from '../components/StickyHeader/StickyHeader'
import SupportingProjects from '../components/SupportingProjects/SupportingProjects'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Banner/Navbar'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import TokenManagement from '../components/TokenManagement/TokenManagement'
import SmartContract from '../components/SmartContract/SmartContract'
import MeetCreet from '../components/MeetCreet/MeetCreet'
import Backed from '../components/Backed/Backed'
const Home: NextPage = () => {
  return (
    <div>
     <StickyHeader/>
     <Navbar/>
     <div className={styles.bannerimage}>
     <Banner/>
     </div>
     <SupportingProjects/>
     <HowItWorks/>
     <TokenManagement/>
     <SmartContract/>
     <MeetCreet/>
     <Backed/>
    </div>
  )
}

export default Home
