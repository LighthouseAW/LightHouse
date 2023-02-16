import Head from 'next/head'
import { Inter } from '@next/font/google'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import React, { useEffect } from 'react'
import { loadStripe } from "@stripe/stripe-js"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

   return (
    <>
      <Head>
        <title>Jonny Nice Productions</title>
        <meta name="description" content="Jonny Nice Productions" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero heading="Jonny Nice" message="Producer, Pianist, Composer" />
      <div className='mx-48'>
        <div className='flex items-center justify-center m-auto w-4/6'>
          <p className='mt-10 text-center text-4xl font-bold mb-20'>
            Jonny Nice Productions
          </p>
        </div>
        <Carousel />
      </div>
    </>
  )
}
