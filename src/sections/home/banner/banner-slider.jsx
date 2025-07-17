'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';
import pageData from '@/data/page-data';
const BannerSlider = () => {
    return (
        <Box sx={{ position: 'relative', height: '90vh' }}>
            <Swiper navigation={true} modules={[EffectFade, Navigation]} effect={'fade'} className="mySwiper">
              {pageData.hero.map((hero) => (
                <SwiperSlide>
                    <Box sx={{display:"flex", flexDirection:"column", width: '50%' }}>
                        <Typography variant='h2' sx={{ fontWeight: 700, fontSize: '60px', color: 'white' }}>{hero.title}</Typography>
                        <Typography variant='p' sx={{ fontWeight: 500, fontSize: '18px', color: 'white' }}>{hero.description}</Typography>
                        <Box sx={{display:"flex", justifyContent: "center", gap:3, marginTop: 3,}}>
                                  <Button variant="contained" sx={{ backgroundColor: 'white', fontWeight: 500, textTransform: 'none', color: '#1E3EA1',width: '25%'  }}>{hero.buttons[0].label}</Button>
                                  <Button
                                    variant="outlined"
                                    sx={{
                                      border: '1px solid #FFF',
                                      color: '#FFF',
                                      fontWeight: 500,
                                      textTransform: 'none',
                                      display: 'flex',
                                      width: '25%',
                                      gap: 1.3,
                                      '&:hover': {
                                        backgroundColor: '#1E3EA110', // light transparent blue on hover
                                        borderColor: '#1E3EA1',
                                      },
                                    }}
                                  >    
                                    {hero.buttons[1].label}
                                  </Button>
                                </Box>
                    </Box>
                </SwiperSlide>
              ))}
            </Swiper>
        </Box>
    )
}

export default BannerSlider