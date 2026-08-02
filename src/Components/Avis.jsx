import React from 'react'
import { FaStar } from "react-icons/fa";
import profil_1 from '../assets/Images/profil-1.png'
import profil_2 from '../assets/Images/profil-2.png'
import profil_3 from '../assets/Images/profil-3.png'

export default function Avis() {
  return (
    <div className='pt-10'>
        <p className='text-amber-600 font-bold font-serif text-center'>Témoignages</p>
        <p className='font-semibold font-serif text-4xl text-center'>Ce que disent nos clients à Dakar</p>

    <div className='flex lg:flex-row gap-5 justify-center items-center flex-wrap p-5 mb-10'>
        <div className='rounded-2xl bg-amber-50 lg:w-100 border-[#9e9d9da6] border shadow-xl p-5 flex flex-col gap-5'>
        <div className='text-amber-500'>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
        </div>

        <div>
            <p className='italic font-serif text-sm'>"La Baguette Tradition est juste incroyable ! C'est exactement le vrai goût du pain français au levain, 
                croustillant comme il faut. Ma famille adore le Pack Famille le dimanche matin."</p>
        </div>

        <div>
            <hr className="lg:w-90 mx-auto border-[#9e9d9de0] mb-2" />
            <div className='flex flex-row items-end gap-3'>
            <img src={profil_1} alt="profil-1" className='rounded-full h-10 w-10 border-amber-400 border-3' />
            <p className='text-sm text-amber-800 '><span className='font-bold'>AMINATA DIALLO</span> <br />Almadies, Dakar</p>
            </div>
        </div>
        </div>


        <div className='rounded-2xl bg-amber-50 lg:w-100 border-[#9e9d9da6] border shadow-xl p-5 flex flex-col gap-5'>
        <div className='text-amber-500'>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
        </div>

        <div>
            <p className='italic font-serif text-sm'>"Je prends ma formule Pause Midi presque tous les jours. 
                Le sandwich poulet dans la baguette croustillante combiné au jus de Bouye frais, c'est mon rituel quotidien !"</p>
        </div>

        <div>
            <hr className="lg:w-90 mx-auto border-[#9e9d9de0] mb-2" />
            <div className='flex flex-row items-end gap-3'>
            <img src={profil_2} alt="profil-2" className='rounded-full h-10 w-10 border-amber-400 border-3' />
            <p className='text-sm text-amber-800 '><span className='font-bold'>ABASS NDIAYE</span> <br />Plateau, Dakar</p>
            </div>
        </div>
        </div>



        <div className='rounded-2xl lg:w-100 bg-amber-50 border-[#9e9d9da6] border shadow-xl p-5 flex flex-col gap-5'>
        <div className='text-amber-500'>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
            <FaStar className='text-[20px] inline'/>
        </div>

        <div>
            <p className='italic font-serif text-sm mb-5'>"Leur Millefeuille et leur Cheesecake sont purement divins. La livraison à domicile à Point E est toujours ponctuelle et le pain arrive encore tiède !"</p>
        </div>

        <div>
            <hr className="lg:w-90 mx-auto border-[#9e9d9de0] mb-2" />
            <div className='flex flex-row items-end gap-3'>
            <img src={profil_3} alt="profil-3" className='rounded-full h-10 w-10 border-amber-400 border-3' />
            <p className='text-sm text-amber-800 '><span className='font-bold'>FATOU DIOP</span> <br />Point-E, Dakar</p>
            </div>
        </div>
        </div>

    </div>
    
    <div className='flex flex-col items-center gap-5 justify-center bg-amber-100 p-5 h-95 text-center'>
    <h2 className='lg:text-5xl text-2xl lg:w-250 w-auto mx-auto font-bold font-serif text-amber-950'>Envie de pain tiède et croustillant des 6h00 ?</h2>
    <p className='lg:w-130 w-auto mx-auto'>Passer votre commande en ligne en moins de 2 minutes. Retrait rapide en boutique  à plateau ou livraison sur tout Dakar.</p>
    <div className='flex lg:flex-row flex-col gap-5 justify-center items-center'>
        <a href="#" className='bg-amber-950 text-amber-50 font-semibold rounded-2xl px-4 py-3 transition-all duration-500 ease-in-out hover:scale-110'>Passer ma commande maintenant</a>
        <a href='#' className='bg-amber-50 font-bold px-4 py-3 rounded-2xl'>Contact & Horaires</a>
    </div>
    </div>
    </div>
  )
}
