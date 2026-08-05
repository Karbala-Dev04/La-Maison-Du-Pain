import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

export default function Offres() {
   return (
    <div className='bg-amber-950 py-10'>

        <div className='text-center p-5'>
            <p className='text-amber-400 text-2xs  font-serif'>FORMULES & BONS PLANS</p>
            <h2 className='text-amber-50 lg:text-5xl text-xl font-bold font-serif'>Les Offres Gourmandes du Jour</h2>
            <p className='text-amber-100'>Economisez sur vos petits dejeuners, vos pauses midi et vos commandes en famille.</p>
        </div>

        <div className='flex lg:flex-row gap-5 justify-center items-center flex-wrap p-5'>

            <div className='border-amber-900 border lg:w-100 w-full rounded-2xl p-5 flex flex-col gap-5 hover:border-amber-300 
            hover:-translate-y-2 transition-all duration-500 ease-in-out'>
                <div className='flex justify-between items-center'>
                    <p className='bg-amber-500 px-2 rounded-2xl font-bold text-amber-950'>Economisez 200 FCFA</p>
                    <p className='text-amber-50 font-bold text-2xl'>1300 FCFA</p>
                </div>
                    <p className='text-amber-50 text-2xl font-serif font-bold'>Formule Petit Dejeuner</p>
                    <p className='text-sm text-amber-50'>Démarrez votre journée avec le vrai goût du beurre frais et un café aromatique.</p>
                <div>
                    <p className='text-amber-50'><IoMdCheckmarkCircleOutline className='inline text-amber-300'/> 1 Croissant Pur Beurre</p>
                    <p className='text-amber-50'><IoMdCheckmarkCircleOutline className='inline text-amber-300'/> 1 Café Expresso ou Allongé</p>
                </div>
                <a href='#' className='bg-amber-300 text-center px-4 w-full py-2 rounded-xl font-medium'>Profiter de cette offre <FaArrowRight className='inline'/> </a>
            </div>


            <div className='border-amber-900 border lg:w-100 w-full rounded-2xl p-5 flex flex-col gap-5 hover:border-amber-300 
            hover:-translate-y-2 transition-all duration-500 ease-in-out'>
                <div className='flex justify-between items-center'>
                    <p className='bg-amber-500 px-2 rounded-2xl  font-bold text-amber-950'>Idéal Familial</p>
                    <p className='text-amber-50 font-bold text-2xl'>2500 FCFA</p>
                </div>
                    <p className='text-amber-50 text-2xl font-serif font-bold'>Pack Famille du Boulanger</p>
                    <p className='text-sm text-amber-50'>Pour régaler toute la maison au réveil ou au goûter dominical.</p>
                <div>
                    <p className='text-amber-50'><IoMdCheckmarkCircleOutline className='inline text-amber-300'/> 4 Baguettes Tradition croustillantes</p>
                    <p className='text-amber-50'><IoMdCheckmarkCircleOutline className='inline text-amber-300'/> 2 Croissants Pur Beurre dorés</p>
                </div>
                <a href='#' className='bg-amber-300 text-center px-4 w-full py-2 rounded-xl font-medium'>Profiter de cette offre <FaArrowRight className='inline'/> </a>
            </div>


            <div className='border-amber-900 border lg:w-100 w-full hover:shadow-2xl rounded-2xl p-5 flex flex-col gap-5 hover:border-amber-300 
            hover:-translate-y-2 transition-all duration-500 ease-in-out'>
                <div className='flex justify-between items-center'>
                    <p className='bg-amber-500 px-2 rounded-2xl  font-bold text-amber-950'>-12% de Réduction</p>
                    <p className='text-amber-50 font-bold text-2xl'>3500 FCFA</p>
                </div>
                    <p className='text-amber-50 text-2xl font-serif font-bold'>Formule Pause Midi Express</p>
                    <p className='text-sm text-amber-50'>Un repas équilibré et gourmand pour vos journées actives à Dakar.</p>
                <div>
                    <p className='text-amber-50'><IoMdCheckmarkCircleOutline className='inline text-amber-300'/> 1 Sandwich Poulet ou Thon au choix</p>
                    <p className='text-amber-50'><IoMdCheckmarkCircleOutline className='inline text-amber-300'/> 1 Jus Naturel 33cl (Bissap ou Bouye)</p>
                </div>
                <a href='#' className='bg-amber-300 text-center px-4 w-full py-2 rounded-xl font-medium'>Profiter de cette offre <FaArrowRight className='inline'/> </a>
            </div>

        </div>

    </div>
    )
}
