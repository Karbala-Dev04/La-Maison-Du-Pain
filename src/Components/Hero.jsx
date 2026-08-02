import React from 'react'
import { FaStar } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import '../Styles/hero.css'
import { WiStars } from "react-icons/wi";

export default function Hero() {
  return (
    <section className='hero'>

    <div className="container max-w-2xl m-auto py-10 px-7">

      <p className='text-[#d18006] border font-serif border-amber-3n00 mb-8 bg-[#ffffffc0] max-w-95 lg:px-7 
      rounded-2xl'> <WiStars className='text-2xl inline' /> ARTISAN BOULANGER DEPUIS 1998</p>
      <h2 className='text-5xl lg:text-7xl mb-8 font-playfair font-bold'>
      Le goût authentique du <span className='text-[#a87507] italic'>pain frais</span></h2>
      <p className=' max-w-xl text-xl mb-7'>Chaque matin à Dakar, nos boulangers pétrissent à la main des farines nobles 
        pour vous offrir baguettes croustillantes, viennoiseries dorées et pâtisseries d'exception.</p>

      <div className='btn mb-6 flex gap-3 flex-col lg:flex-row'>
      <a href='#' className='bg-amber-900 rounded-full font-semibold px-4 py-3 cursor-pointer text-amber-50'>Commander maintenant <AiOutlineArrowRight className='text-[15px] inline'/></a>
      <a href='#' className='bg-transparent rounded-full border-2 transition-all duration-500 ease-in-out border-[#ffffff34]  px-4 py-3 font-semibold
      hover:bg-[#ffffff4f] hover:border-amber-500 cursor-pointer'>Voir nos produits</a>
      </div>

      <div className='stats flex gap-10 w-full'>
        <div>
          <h3 className='text-amber-500 font-playfair text-4xl font-bold'>25+</h3>
          <p className='text-xs'>Années d'artisanat</p>
        </div>

        <div>
          <h3 className='text-amber-500 font-playfair text-4xl font-bold'>40+</h3>
          <p className='text-xs'>Produits maison</p>
        </div>

        <div>
          <h3 className='text-amber-500 font-playfair text-4xl font-bold'>5 <FaStar className='text-[30px] inline'/></h3>
          <p className='text-xs'>Notes Clients</p>
        </div>
  
      </div>

    </div>

    </section>
  )
}
