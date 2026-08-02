import React from 'react'
import petrissage from '../assets/Images/petrissage.png'
import { FaArrowRight } from "react-icons/fa6";

export default function Histoire() {
  return (
    <div className='flex justify-center bg-amber-100 items-center gap-15 lg:p-15 px-5 py-15 flex-col lg:flex-row'>
    <div className='flex-1 w-full relative'>
        <img src={petrissage} alt="petrissage" className='rounded-2xl h-95 object-cover w-full' />
        <div className='absolute hidden lg:block lg:-bottom-5 lg:-right-5 border-amber-300 border lg:w-90 w-80
        bg-amber-950 rounded-2xl p-4 text-amber-50'>
            <p className='text-amber-300 font-semibold font-serif mb-2'>"Le secret réside dans le temps."</p>
            <p className='text-sm text-amber-50'>Levain mère naturel nourri quotidiennement avec amour par nos boulangers à Dakar.</p>
        </div>
    </div>

    <div className='flex flex-col gap-5 flex-1'>
        <div>
            <p className='text-amber-600 font-bold'>SAVOIR-FAIRE & PASSION</p>
        <h2 className='text-amber-950 lg:text-5xl text-4xl font-bold font-serif'>Chaque matin, la magie opère dès 06h00</h2>
        </div>
        <p className='text-[18px] font-serif'>Fondée à Dakar, Maison du Pain perpétue l'art de la boulangerie française traditionnelle. Nous refusons les farines pré-mélangées et les additifs industriels. 
            De la mise en pâte au façonnage à la main jusqu'à la cuisson sur sole de pierre, chaque étape est maîtrisée avec rigueur.</p>
        <div className='flex lg:flex-row gap-5'>
            <p className='border border-[#9e9d9db6] rounded-2xl bg-amber-50 px-4 py-2 justify-between lg:w-[40%] font-semibold text-xs'><span className='text-xl text-amber-600 font-bold'>100%</span> <br /> fait Maison à Dakar</p>
            <p className='border border-[#9e9d9db6] rounded-2xl bg-amber-50 px-4 py-2 justify-between lg:w-[40%] font-semibold text-xs'><span className='text-xl text-amber-600 font-bold'>0% </span><br /> Conservateurs industriels</p>
        </div>

        <a href='#' className='lg:w-[30%] w-[40%] bg-amber-950 py-3 px-5 text-amber-50 font-semibold rounded-xl font-serif'> Découvrir <FaArrowRight className='inline'/></a>
    </div>
    </div>
  )
}
