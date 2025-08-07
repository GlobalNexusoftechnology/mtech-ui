'use client'
import ProductCard from '@/components/product-card/product-card'
import { RootState } from '@/store'
import { Box, Typography } from '@mui/material'
import {  useSelector } from 'react-redux'

    
const FeaturedProducts = () => {

  
  const products = useSelector((state: RootState) => state.products.products.filter((p) => p.tag === 'Featured'))

    return (
        <section className='py-8 px-4 sm:px-6 lg:px-12' style={{ background: 'linear-gradient(180deg,rgba(247, 249, 252, 1) 0%, rgba(242, 246, 249, 1) 100%)' }} >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '1rem',
                gap: 1,
            }}>
                <Typography variant='h2' sx={{ fontWeight: 600, fontSize: '36px', color: 'black', textAlign: 'center' }}>Our Featured Products</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: '18px', color: '#475569', textAlign: 'center' }}>Premium voltage stabilizers and power solutions for every application</Typography>
            </Box>
            <Box sx={{ display: 'flex', marginTop: 5, justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
                {
                    products.map((product, index) => (

                        <ProductCard sx={{ width: { md: '23%', sm: '48%', xs: '98%' } }} product={product} key={index} />

                    ))
                }
            </Box>

        </section>
    )
}
export default FeaturedProducts