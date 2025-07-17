import pageData from '@/data/page-data'
import { Box, Typography } from '@mui/material'
import React from 'react'

const ProductRange = () => {
  return (
    <section className='py-2 px-12'>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '1rem',
        gap: 1,
      }}>
        <Typography variant='h2' sx={{ fontWeight: 600, fontSize: '36px', color: 'black', textAlign: 'center' }}>Our Product Range</Typography>
        <Typography variant='p' sx={{ fontWeight: 500, fontSize: '18px', color: '#475569', textAlign: 'center' }}>Comprehensive power solutions designed to meet your specific requirements</Typography>
      </Box>
      <Box sx={{ display: "flex", gap:3, marginY: 5 }}>
        {pageData.productRange.map((range, index) => {
          const Icon = range.icon;
          return (
            <Box key={index} sx={{boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;', padding:2, width:'13%', alignItems: "center", display: 'flex', flexDirection: 'column',  borderRadius: '8px'}}>
              <Box sx={{background: "#DBEAFE", padding:2, borderRadius: '12px', marginBottom: 1.5}}>
                <Icon color='#2563EB' size={22} />
              </Box>

              <Typography
                variant='p'
                sx={{ fontWeight: 500, fontSize: '14px', color: 'black', textAlign: 'center' }}
              >{range.label}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </section>
  )
}

export default ProductRange