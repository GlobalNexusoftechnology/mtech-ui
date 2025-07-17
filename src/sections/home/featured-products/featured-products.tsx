'use client'
import Popup from '@/components/popup/popup'
import { RootState } from '@/store'
import { setselectedProduct } from '@/store/slices/productSlice'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

    
const FeaturedProducts = () => {

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
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

                        <Box key={index} sx={{ width: {md:'23%', sm:'48%', sx:'98%'}, background: 'white', borderRadius: '10px' }}>
                            <Image src={product.image} alt='product' width={100} height={100} className='w-full h-[230px] object-cover rounded-t-lg' />
                            <Box sx={{
                                padding: '24px',
                            }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '18px', color: 'black' }}>{product.title}</Typography>
                                <Typography sx={{ fontWeight: 700, fontSize: '24px', color: '#2563EB' }}>{product.price.amount}<span style={{ color: "#505050", fontSize: '14px' }}>{product.price.unit}</span></Typography>
                                <div className='flex flex-wrap justify-between gap-y-2 mt-3'>
                                    <div className='p-3 bg-[#F8FAFC] border-1 border-[#E4E4E7] w-[48%] rounded-lg'>
                                        <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#505050' }}>Cooling</Typography>
                                        <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#000000', marginTop: "2px" }}>{product.specs.cooling}</Typography>
                                    </div>
                                    <div className='p-3 bg-[#F8FAFC] border-1 border-[#E4E4E7] w-[48%] rounded-lg'>
                                        <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#505050' }}>Cooling</Typography>
                                        <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#000000', marginTop: "2px" }}>{product.specs.phase}</Typography>
                                    </div>
                                    <div className='p-3 bg-[#F8FAFC] border-1 border-[#E4E4E7] w-[48%] rounded-lg'>
                                        <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#505050' }}>Cooling</Typography>
                                        <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#000000', marginTop: "2px" }}>{product.specs.capacity}</Typography>
                                    </div>
                                    <div className='p-3 bg-[#F8FAFC] border-1 border-[#E4E4E7] w-[48%] rounded-lg'>
                                        <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#505050' }}>Cooling</Typography>
                                        <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#000000', marginTop: "2px" }}>{product.specs.usage}</Typography>
                                    </div>
                                </div>
                                <Button variant="contained" onClick={() => {
                                    dispatch(setselectedProduct(product));
                                    setOpen(true)}}  
                                    sx={{ backgroundColor: '#2563EB', fontWeight: 500, textTransform: 'none', color: 'white', width: '100%', marginTop: 2 }}>Get a Quote</Button>
                                <Popup open={open} handleClose={() => setOpen(false)}/>
                            </Box>
                        </Box>

                    ))
                }
            </Box>

        </section>
    )
}
export default FeaturedProducts