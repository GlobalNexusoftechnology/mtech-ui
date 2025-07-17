import React from 'react'
import TopHeader from '../top-header/page'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Phone } from 'lucide-react'
import { Button } from '@mui/material';


const Header = () => {
  return (
    <>
      <TopHeader />
      <header className='py-2 px-12 flex justify-between items-center'>
        <Image src="/logo/logo-mtech.png" alt='Logo' width={180} height={100} />
        <nav className='flex items-center gap-10'>
          <Link href="/" className='text-base font-medium flex gap-1 items-center'>Products <ChevronDown size={16} /></Link>
          <Link href="/" className='text-base font-medium flex gap-1 items-center'>Service </Link>
          <Link href="/" className='text-base font-medium flex gap-1 items-center'>About Us </Link>
          <Link href="/" className='text-base font-medium flex gap-1 items-center'>Contact Us </Link>
        </nav>
        <div className='flex gap-2'>
          <Button
            variant="outlined"
            sx={{
              border: '1px solid #1E3EA1',
              color: '#1E3EA1',
              fontWeight: 500,
              textTransform: 'none',
              display: 'flex',
              gap: 1.3,
              '&:hover': {
                backgroundColor: '#1E3EA110', // light transparent blue on hover
                borderColor: '#1E3EA1',
              },
            }}
          >
            <Phone size={15} />
            Call Us
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#1E3EA1', fontWeight: 500, textTransform: 'none', }}>Get a Quote</Button>
        </div>
      </header>
    </>
  )
}

export default Header