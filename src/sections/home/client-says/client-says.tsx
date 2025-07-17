import pageData from '@/data/page-data'
import { Box, Typography } from '@mui/material'
import { Quote, Star, User } from 'lucide-react'
import React from 'react'

const ClientSays = () => {
    return (
        <section className='py-8 px-4 sm:px-6 lg:px-12' >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '1rem',
                gap: 1,
            }}>
                <Typography variant='h2' sx={{ fontWeight: 600, fontSize: '36px', color: 'black', textAlign: 'center' }}>What Our Clients Say</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: '18px', color: '#475569', textAlign: 'center' }}>Trusted by leading enterprises across industries for reliable power solutions</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 3, marginTop: 4, paddingBottom:4, borderBottom:'1px solid #D9D9D9', flexWrap: 'wrap' }}>
                {
                    pageData.testimonials.map((item, index) => (
                        <Box key={index} sx={{ width: {md:'23%', sm:'48%', sx:'98%'}, display: "flex", flexDirection: 'column', gap: 1.5, padding: 3, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;', borderRadius: 2 }}>
                            <Quote color='#2563EB' size={30} />
                            <Box sx={{ display: "flex" }}>
                                {[...Array(item.stars)].map((_, index) => (

                                    <Star key={index} fill='#FACC15' color='#FACC15' size={16} />
                                )
                                )}
                            </Box>
                            <Typography sx={{ fontWeight: 400, fontSize: '16px', fontStyle: "italic", color: '#747474' }}>{item.text}</Typography>
                            <Box sx={{display:'flex', alignItems: 'center', gap: 2}}>
                                <div className='bg-[#2563EB4D] h-[50px] w-[50px] rounded-full flex items-center justify-center'>
                                    <User color='#0D559A' size={25} />
                                </div>
                                <Box>
                                    <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>{item.author}</Typography>
                                    <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#747474' }}>{item.role}</Typography>
                                    <Typography sx={{ fontWeight: 400, fontSize: '12px',  color: '#2563EB' }}>{item.company}</Typography>
                                    
                                </Box>
                            </Box>
                        </Box>
                    ))
                }


            </Box>
        </section>
    )
}

export default ClientSays