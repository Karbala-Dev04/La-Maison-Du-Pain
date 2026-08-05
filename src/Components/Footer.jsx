import React from 'react'
import logo from '../assets/Images/logo_maison_du_pain.png';
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { PiTiktokLogo } from "react-icons/pi";
import { TbClockHour8 } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
export default function Footer() {
  return (
  <div className='bg-amber-950'>
      <div className='flex lg:flex-row flex-col gap-10 justify-around p-10'>
        <div className='flex flex-wrap gap-5'>
            <div className='flex gap-7 flex-col w-70'>
            <div className='flex items-center gap-3'>
            <img src={logo} alt="logo" className='w-8 h-8 rounded-full object-cover' />
            <h2 className='text-xl text-amber-50 font-medium font-playfair'>Maison du Pain</h2>
            </div>
            <p className='text-amber-50 text-sm'>Le goût authentique du pain frais, pétri chaque jour à Dakar avec passion et tradition.</p>
            <div className='flex gap-3'>
                <FaInstagram className='text-amber-50 text-[33px] px-2 rounded-full cursor-pointer border-amber-50 border transition-all duration-500 ease-in-out hover:-translate-y-2 hover:bg-amber-200 hover:text-amber-950'/>
                <LuFacebook  className='text-amber-50 text-[33px] px-2 rounded-full cursor-pointer border-amber-50 border transition-all duration-500 ease-in-out hover:-translate-y-2 hover:bg-amber-200 hover:text-amber-950'/>
                <PiTiktokLogo  className='text-amber-50 text-[33px] px-2 rounded-full cursor-pointer border-amber-50 border transition-all duration-500 ease-in-out hover:-translate-y-2 hover:bg-amber-200 hover:text-amber-950'/>
            </div>
        </div>


        <div>
            <p className=' font-bold font-playfair text-amber-50 mb-2'>Liens Rapides</p>
            <div className='flex flex-col gap-1 text-amber-50'>
            <a href="#" className='text-sm hover:text-amber-200'>Accueil</a>
            <a href="#" className='text-sm hover:text-amber-200'>Produits</a>
            <a href="#" className='text-sm hover:text-amber-200'>Offres</a>
            <a href="#" className='text-sm hover:text-amber-200'>A Propos</a>
            <a href="#" className='text-sm hover:text-amber-200'>Contact</a>
            </div>
        </div>
        </div>


        <div className='flex flex-wrap gap-5'>
            <div className='flex flex-col gap-3'>
            <p className='font-bold font-playfair text-amber-50 mb-2'>Horaires</p>
            <p className='text-amber-50 text-sm'><TbClockHour8 className='inline text-xl text-amber-300'/> Lundi-Dimanche</p>
            <p className='text-amber-50 mx-6 text-sm'>06h00-22h00</p>
            <p className='text-amber-300 text-sm mx-6 font-mono'>Cuisson fraîche toutes les 2 heures</p>
            <p className='text-amber-300 text-sm mx-6 font-mono'>Ouverts les jours de féries</p>
        </div>

        <div className='flex flex-col gap-3'>
            <p className='font-bold font-playfair text-amber-50 mb-2'>Contact</p>
            <p className='text-amber-50 font-mono'><IoLocationOutline className='inline text-xl text-amber-300 '/> Fass, Dakar, Sénégal</p>
            <p className='text-amber-50 text-sm font-mono'><IoCallOutline className='inline text-xl text-amber-300 '/> +221 70 727 79 08</p>
            <p className='text-amber-50 text-sm font-mono'><IoMailOutline className='inline text-xl text-amber-300 '/> maisondupain@gmail.com</p>
        </div>
        </div>
    </div>
    <hr className="lg:w-200 mx-auto border-[#ffedc649]" />
    <p className='text-amber-50 text-center p-5 '>&copy;2026 Maison du Pain — Tous droits réservés.</p>
    <p className='text-amber-300 text-center p-2 italic text-sm font-bold font-playfair'>BY KARBALA</p>
  </div>
  )
}
