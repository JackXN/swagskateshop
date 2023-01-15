import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';



// Components
import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products/Products';


export default function Home() {
  return (
    <>
      <Head>
        <title>Swag Skateshop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
<Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </>
  )
} 
