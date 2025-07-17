'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Popup from '@/components/popup/popup'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { setselectedProduct } from '@/store/slices/productSlice'

type Category = {
  category: string
}

const ProductSlider = ({ category }: Category) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) =>
    state.products.products.filter((p) => p.category === category)
  )

  return (
    <>
      <Swiper
        slidesPerView={2.2}
        spaceBetween={30}
        style={{
          width: '100%',
          height: '100%',
          padding: '2rem 0px',
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={index}
            style={{
              fontSize: '18px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'white',
              width: '60%',
              height: '350px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                background: 'white',
                borderRadius: '10px',
                boxShadow:
                  'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                height: '100%',
                width: '100%'
              }}
            >
              <Box
                sx={{
                  width: '50%',
                  height: '100%',
                  position: 'relative',
                  borderRadius: '10px 0px 0px 10px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={product.image}
                  alt='product'
                  fill
                  
                />
              </Box>

              <Box
                sx={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '50%',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '18px',
                    color: 'black',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {product.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#2563EB',
                    textAlign: 'left',
                  }}
                >
                  {product.price.amount}
                  <span style={{ color: '#505050', fontSize: '14px' }}>
                    {product.price.unit}
                  </span>
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '8px 0',
                    mt: 2,
                  }}
                >
                  {[
                    { label: 'Cooling', value: product.specs.cooling },
                    { label: 'Phase', value: product.specs.phase },
                    { label: 'Capacity', value: product.specs.capacity },
                    { label: 'Usage', value: product.specs.usage },
                  ].map((spec, i) => (
                    <Box
                      key={i}
                      sx={{
                        p: 1.5,
                        bgcolor: '#F8FAFC',
                        border: '1px solid #E4E4E7',
                        width: '48%',
                        borderRadius: '8px',
                        textAlign: 'left',
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: '12px',
                          color: '#505050',
                        }}
                      >
                        {spec.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: '12px',
                          color: '#000000',
                          mt: '2px',
                        }}
                      >
                        {spec.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant='contained'
                  onClick={() => {
                    dispatch(setselectedProduct(product))
                    setOpen(true)
                  }}
                  sx={{
                    backgroundColor: '#2563EB',
                    fontWeight: 500,
                    textTransform: 'none',
                    color: 'white',
                    width: '100%',
                    mt: 2,
                  }}
                >
                  Get a Quote
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Popup open={open} handleClose={() => setOpen(false)} />
    </>
  )
}

export default ProductSlider
