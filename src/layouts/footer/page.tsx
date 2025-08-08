import pageData from '@/data/page-data'
import { toSlug } from '@/lib/slugified'
import { Box, Typography } from '@mui/material'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='py-8 px-4 sm:px-6 lg:px-12' style={{ borderTop: '1px solid #EFF0F6', background: '#FFF' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, paddingBottom: 8, paddingTop: 8, borderBottom: '1px solid #2563EB' }}>
        <Box sx={{ width: { md: '22%', sm: '48%', sx: '98%' } }}>
          <Link href='/'>
            <Image src='/logo/logo-mtech.png' alt='logo' height={100} width={150} />
          </Link>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2.5,
            marginTop: 1
          }}>
            <Facebook color='#2563EB' size={18} />
            <Instagram color='#2563EB' size={18} />
            <Linkedin color='#2563EB' size={18} />
            <Youtube color='#2563EB' size={18} />
          </Box>
        </Box>
        <Box sx={{ width: { md: '22%', sm: '48%', xs: '98%' }, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant='h4' sx={{ fontSize: "18px", fontWeight: 600, color: '#2563EB', marginBottom: 2 }}>Products & Services</Typography>
          {pageData.footer.sections['Products & Services'].map((item, index) => (
            <Link href={`/products/${toSlug(item)}`} key={index}>
              <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>{item}</Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{ width: { md: '22%', sm: '48%', xs: '98%' }, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant='h4' sx={{ fontSize: "18px", fontWeight: 600, color: '#2563EB', marginBottom: 2 }}>Company</Typography>
          {pageData.footer.sections.Company.map((item, index) => (
            <Link key={index} href={item.link}>
              <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
                {item.name}
              </Typography>
            </Link>
          ))}
        </Box>
        <Box sx={{ width: { md: '22%', sm: '48%', xs: '98%' }, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant='h4' sx={{ fontSize: "18px", fontWeight: 600, color: '#2563EB', marginBottom: 2 }}>Contacts us</Typography>
          <Link href={`mailto:${pageData.footer.sections.Contacts.email}`}>
            <Box sx={{ display: 'flex', gap: 1.5, }}>
              <Mail color='#2563EB' size={20} className='w-[8%]' />
              <Typography sx={{ fontSize: "16px", fontWeight: 400 }}> {pageData.footer.sections.Contacts.email}</Typography>
            </Box>
          </Link>
          <Link href={`tel:${pageData.footer.sections.Contacts.phone}`}>

            <Box sx={{ display: 'flex', gap: 1.5, }}>
              <Phone color='#2563EB' size={20} className='w-[8%]' />
              <Typography sx={{ fontSize: "14px", fontWeight: 400, }}> {pageData.footer.sections.Contacts.phone}</Typography>
            </Box>
          </Link>
          <Box sx={{ display: 'flex', gap: 1.5, }}>
            <MapPin color='#2563EB' size={20} className='w-[15%]' />
            <Typography sx={{ fontSize: "14px", fontWeight: 400, }}> {pageData.footer.sections.Contacts.address} </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        paddingTop: 2,
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>{pageData.footer.copyright} | Developed By <Link href='https://giganexustechnology.com/' style={{ color: 'blue' }}>{pageData.footer.dev}</Link></Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>All Rights Reserved </Typography>
      </Box>
    </section>
  )
}

export default Footer