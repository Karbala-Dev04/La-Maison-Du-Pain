import React from 'react'
import { LuLeaf } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import { TbClockHour4 } from "react-icons/tb";
import pain from '../assets/Images/pains.jpg'
import patisserie from '../assets/Images/patisseries.jpg'
import viennoiserie from '../assets/Images/viennoiseries.jpg'

export default function Services() {
  return (
    <section className='flex flex-col lg:flex-row justify-between items-center gap-12 mt-12 px-6 py-16 lg:px-20'>

        <div className='description flex flex-1 gap-5 flex-col'>

        <p className='text-amber-500 text-xl font-light'>Notre Maison</p>
            <h2 className='text-amber-950 font-bold font-playfair text-5xl'>Un savoir-faire transmis, une passion partagée.</h2>
        <p className='text-amber-900 text-2xs'>Maison du Pain, c'est plus qu'une boulangerie : un atelier vivant où farine, levain et patience se rencontrent. 
        Nous travaillons des matières premières sélectionnées avec soin, sans additifs, pour préserver le vrai goût.</p>

        <div className='icon-txt flex flex-col lg:flex-row gap-4'>
            <div className='hover:-translate-y-2 hover:shadow-2xl transition-[shadow, transform] 
            duration-400 ease-in-out cursor-pointer shadow-md flex gap-2 items-center  border border-amber-100 p-3 rounded-2xl'>
                <LuLeaf className="text-4xl text-amber-600 px-2 rounded-full bg-amber-100"/>
                <p>Ingredients frais</p>
            </div>

            <div className='hover:-translate-y-2 hover:shadow-2xl transition-[shadow, transform] 
            duration-400 ease-in-out cursor-pointer shadow-md flex gap-2 items-center  border border-amber-100 p-3 rounded-2xl'>
                <SlBadge className="text-4xl text-amber-600 px-2 rounded-full bg-amber-100"/>
                <p>Pétrissage main</p>
            </div>

            <div className='hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-[shadow, transform] 
            duration-400 ease-in-out shadow-md flex gap-2 items-center border border-amber-100 rounded-2xl p-3'>
                <TbClockHour4 className="text-4xl text-amber-600 px-2 rounded-full bg-amber-100"/>
                <p>Cuit chaque jour</p>
            </div>
        </div>

        </div>

        <div className="images flex-1 grid grid-cols-2 grid-flow-row gap-2">

        <div className='relative cursor-pointer overflow-hidden rounded-2xl group'>
            <img src={pain} alt="pain" className='lg:h-70 w-full rounded-2xl transition-transform duration-500 ease-in-out 
            group-hover:scale-110 object-cover'/>
            <div className='absolute inset-0 flex justify-center items-center opacity-0 bg-[#ff660085] 
            transition-opacity duration-500 ease-in-out text-3xl text-amber-50 font-playfair font-bold group-hover:opacity-100'>
                <p>Pain</p>
            </div>
        </div>

        <div className='relative cursor-pointer overflow-hidden rounded-2xl group'>
            <img src={viennoiserie} alt="viennoiserie" className='row-span-2 my-2 h-full w-full rounded-2xl 
            transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover'/>
            <div className='absolute inset-0 flex justify-center items-center opacity-0 bg-[#ff660085] 
            transition-opacity duration-500 ease-in-out text-3xl text-amber-50 font-playfair font-bold group-hover:opacity-100'>
                <p>Viennoiserie</p>
            </div>
        </div>

        <div className='relative cursor-pointer overflow-hidden rounded-2xl group col-span-2'>
            <img src={patisserie} alt="patisserie" className='h-60 w-full rounded-2xl transition-transform 
            duration-500 ease-in-out group-hover:scale-110 object-cover'/>
            <div className='absolute inset-0 flex justify-center items-center opacity-0 bg-[#ff660085] 
            transition-opacity duration-500 ease-in-out text-3xl text-amber-50 font-playfair font-bold group-hover:opacity-100'>
                <p>Patisserie</p>
            </div>
        </div>

        </div>

    </section>
    )
}
