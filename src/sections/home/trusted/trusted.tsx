import pageData from '@/data/page-data'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Trusted = () => {
  return (
    <section className='py-8 px-12' style={{paddingBottom: '5rem'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}>
                <Typography variant='h2' sx={{ fontWeight: 600, fontSize: '36px', color: 'black', textAlign: 'center' }}>Trusted By Leading Companies</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: '18px', color: '#475569', textAlign: 'center' }}>Join hundreds of satisfied clients who rely on our power solutions</Typography>
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: '2rem',
            }}>
              {
                pageData.trustedCompanies.map((img, index) => (
                  <Image src={img} key={index} alt='logo' height={100} width={200} />
                ))
              }
            </Box>
      </section>
  )
}

export default Trusted