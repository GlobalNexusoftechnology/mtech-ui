import React from 'react'
import { MapPin, File, Mail } from 'lucide-react';

const TopHeader = () => {
  return (
    <section className='bg-[#1E3EA1] py-2 px-12 flex justify-between'>
        <div className='flex gap-6'>
            <div className='flex gap-2 items-center'>
                <MapPin color="white" size={18} />    
                <p className='text-white text-sm font-medium'>12, Jambhulkar Mala, Wanowrie, Pune, Maharashtra 411040, India</p>
            </div>
            <div className='flex gap-2 items-center'>
                <File color="white" size={18} />    
                <p className='text-white text-sm'>GST No:- 27AWNPS7832B1Z7</p>
            </div>
        </div>
        <div className='flex gap-4'>
            <div className='flex gap-2 items-center'> 
                <Mail color="white" size={18} />   
                <p className='text-white text-sm'>Send Email</p>
            </div>
        </div>
    </section>
  )
}

export default TopHeader