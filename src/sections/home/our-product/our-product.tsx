import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductSlider from './product-slider'

const OurProduct = () => {
  return (
    <section className='py-8' >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '1rem',
                padding:{xs: '5px'},
                gap: 1,
            }}>
                <Typography variant='h2' sx={{ fontWeight: 600, fontSize: '36px', color: 'black', textAlign: 'center' }}>Our Products</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: '18px', color: '#475569', textAlign: 'center' }}>Explore a wide selection of powerful solutions tailored to meet all your energy needs</Typography>
            </Box>
            <Box sx={{ marginTop: 2 }}>

                <Box >
                    <Typography variant='h2' sx={{ fontWeight: 600, fontSize: '28px', color: 'black', textAlign: 'left', paddingLeft: '3rem', marginTop:'2rem' }}>Servo & Voltage Stabilizers</Typography>
                </Box>
                    <ProductSlider category="Servo & Voltage Stabilizers" />
            </Box>

            <Box sx={{ marginTop: 2 }}>

                <Box >
                    <Typography variant='h2' sx={{ fontWeight: 600, fontSize: '28px', color: 'black', textAlign: 'left', paddingLeft: '3rem', marginTop:'2rem' }}>Online & Offline UPS</Typography>
                </Box>
                    <ProductSlider category="Online & Offline UPS" />
            </Box>

        </section>
  )
}

export default OurProduct