import React from 'react';
import baguette from '../assets/Images/baguette-traditionnelle.png';
import croissant from '../assets/Images/croissants.png';
import complet from '../assets/Images/pain-complet.png';
import grain from '../assets/Images/pain-grain.png';
import { LuShoppingBag } from "react-icons/lu";

export default function Produits() {
  return (
    
    <div className='container-fluid py-20'>
        <div className='flex flex-col px-12 mb-10'>
        <p className='text-amber-700 font-mono text-xl'>Selection gourmandise</p>
        <p className='text-amber-800  font-serif font-bold lg:text-5xl text-2xl'>Nos Inconcournables Populaires</p>
        </div>

        <div className='flex flex-row gap-5 justify-center px-5 flex-wrap'>
        <div className="group card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer 
            border border-amber-700 overflow-hidden lg:w-75 w-full rounded-2xl">
            <div className="img relative overflow-hidden">
                <img src={baguette} alt="baguette-traditionnelle" className=' w-full h-60 object-cover 
                group-hover:scale-110 transition-transform duration-500 ease-in-out' />
                <p className='absolute bg-amber-900 font-medium text-sm text-amber-50 top-3 rounded-2xl 
                border border-[#ffffff5e] px-4 py-1 left-3'>vedette</p>
            </div>

            <div className='p-5 flex flex-col overflow-hidden gap-2 mb-5'>
                <p className='text-sm text-amber-600 font-semibold font-playfair'>Pains</p>
                <p className='text-amber-900 font-bold text-xl font-playfair'>Baguette Tradition</p>
                <p className='text-xs'>Croustillante à l'extérieur, mie alvéolée et moelleuse à l'intérieur. Levain naturel et farine T65 pur blé.</p>
            </div>
                <hr className="w-[90%] mx-auto border-amber-200" />
            <div className='flex flex-row px-3 justify-between items-center py-2'>
                <p className='font-playfair font-bold text-amber-400'>Prix 300 FCFA</p>
                <a className='flex flex-row items-center gap-2 text-sm bg-amber-900
                text-amber-50 rounded-xl px-2 py-1'><LuShoppingBag className='text-amber-300'/>Commander</a>
            </div>
        </div>

        <div className="group card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer 
            border border-amber-700 overflow-hidden lg:w-75 w-full rounded-2xl">
            <div className="img relative overflow-hidden">
                <img src={complet} alt="baguette-traditionnelle" className=' w-full h-60 object-cover 
                group-hover:scale-110 transition-transform duration-500 ease-in-out' />
                <p className='absolute bg-amber-900 font-medium text-sm text-amber-50 top-3 rounded-2xl 
                border border-[#ffffff5e] px-4 py-1 left-3'>Incontournable</p>
            </div>

            <div className='p-5 flex flex-col overflow-hidden gap-2 mb-5'>
                <p className='text-sm text-amber-600 font-semibold font-playfair'>Pains</p>
                <p className='text-amber-900 font-bold text-xl font-playfair'>Pain Complet</p>
                <p className='text-xs'>Pain riche en fibres aux farines intégrales moulues sur meule de pierre. Goût de noisette subtil.</p>
            </div>
                <hr className="w-[90%] mx-auto border-amber-200" />
            <div className='flex flex-row px-3 justify-between items-center py-2'>
                <p className='font-playfair font-bold text-amber-400'>Prix 700 FCFA</p>
                <a className='flex flex-row items-center gap-2 text-sm bg-amber-900
                text-amber-50 rounded-xl px-2 py-1'><LuShoppingBag className='text-amber-300'/>Commander</a>
            </div>
        </div>


        <div className="group card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer 
            border border-amber-700 overflow-hidden lg:w-75 w-full rounded-2xl">
            <div className="img relative overflow-hidden">
                <img src={grain} alt="baguette-traditionnelle" className='w-full h-60 object-cover 
                group-hover:scale-110 transition-transform duration-500 ease-in-out' />
                <p className='absolute bg-amber-900 font-medium text-sm text-amber-50 top-3 rounded-2xl 
                border border-[#ffffff5e] px-4 py-1 left-3'>Best-Seller</p>
            </div>

            <div className='p-5 flex flex-col overflow-hidden gap-2 mb-3'>
                <p className='text-sm text-amber-600 font-semibold font-playfair'>Pains</p>
                <p className='text-amber-900 font-bold text-xl font-playfair'>Pain au Sourdough & Graines</p>
                <p className='text-xs'>Pain au levain à fermentation lente 24h, parsemé de graines de lin, tournesol et sésame torréfiées.</p>
            </div>
                <hr className="w-[90%] mx-auto border-amber-200" />
            <div className='flex flex-row px-3 justify-between items-center py-2'>
                <p className='font-playfair font-bold text-amber-400'>Prix 600 FCFA</p>
                <a className='flex flex-row items-center gap-2 text-sm bg-amber-900
                text-amber-50 rounded-xl px-2 py-1'><LuShoppingBag className='text-amber-300'/>Commander</a>
            </div>
        </div>
        

        <div className="group card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer 
            border border-amber-700 overflow-hidden lg:w-75 w-full rounded-2xl">
            <div className="img relative overflow-hidden">
                <img src={croissant} alt="baguette-traditionnelle" className=' w-full h-60 object-cover 
                group-hover:scale-110 transition-transform duration-500 ease-in-out' />
                <p className='absolute bg-amber-900 font-medium text-sm text-amber-50 top-3 rounded-2xl 
                border border-[#ffffff5e] px-4 py-1 left-3'>Populaire</p>
            </div>

            <div className='p-5 flex flex-col overflow-hidden gap-2 mb-3'>
                <p className='text-sm text-amber-600 font-semibold font-playfair'>viennoiserie</p>
                <p className='text-amber-900 font-bold text-xl font-playfair'>Croissant Feuilleté Pur Beurre</p>
                <p className='text-xs'>Feuilletage croustillant, cœur fondant et arôme envoûtant de beurre de baratte français AOP.</p>
            </div>
                <hr className="w-[90%] mx-auto border-amber-200" />
            <div className='flex flex-row px-3 justify-between items-center py-2'>
                <p className='font-playfair font-bold text-amber-400'>Prix 200 FCFA</p>
                <a className='flex flex-row items-center gap-2 text-sm bg-amber-900
                text-amber-50 rounded-xl px-2 py-1'><LuShoppingBag className='text-amber-300'/>Commander</a>
            </div>
        </div>

    </div>
    </div>
  )
}
