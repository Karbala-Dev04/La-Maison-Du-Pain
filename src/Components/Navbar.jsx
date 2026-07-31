import React from 'react';
import logo from '../assets/Images/logo_maison_du_pain.png';
import '../Styles/navbar.css';
import { useState } from 'react';
import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='sticky navbar z-50 top-0 bg-amber-50 flex justify-between items-center py-2 px-7 shadow-xl'>
      
        <div className='flex gap-3'>
            <img src={logo} alt="logo" className='w-12 rounded-full object-cover' />
            <div>
            <h2 className='text-xl font-bold'>Maison du Pain</h2>
            <p className='text-xs text-amber-400'>Boulangerie Artisanale</p>
            </div>
        </div>

        <button className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiMiniXMark className="text-3xl"/> : <HiMiniBars3 className="text-3xl"/>}
        </button>

        <div className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"} transition-[opacity,translate] duration-500
        ease-in-out absolute top-full left-0 w-full flex flex-col items-center bg-amber-50 py-6 px-7 gap-10
        lg:static lg:flex lg:flex-row lg:w-auto md:bg-transparent lg:items-center lg:justify-between lg:flex-1 lg:ml-5 lg:opacity-100 
        lg:translate-y-0 lg:p-0 lg:transition-none lg:pointer-events-auto`}>

          <ul className='flex w-full nav-link flex-col gap-4 lg:flex-row lg:justify-center lg:flex-1 lg:gap-10'>
            <li><a href="#" className='link'>Acceuil</a></li>
            <li><a href="#" className='link'>Produits</a></li>
            <li><a href="#" className='link'>Offres</a></li>
            <li><a href="#" className='link'>A propos</a></li>
            <li><a href="#" className='link'>Contact</a></li>
        </ul>

        <button className='rounded-full bg-amber-950 px-5 py-1.5 text-amber-100 font-semibold w-full lg:w-auto'><a href="#">Commander</a></button>
        </div>

    </nav>
  )
}
