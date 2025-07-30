'use client'
import React from 'react'
import { Box, Typography, Avatar, Rating } from '@mui/material'
import Link from 'next/link'
import pageData from '@/data/page-data'


const ReviewCard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5,  }}>
      {pageData.reviews.map((data, i) => (
        <Box
          key={i}
          sx={{
            borderRadius: '10px',
            background: '#fff',
            padding: 3,
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 600,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#2563EB4D', color: '#0D559A', fontWeight: 700, fontSize: '16px' }}>
              {data.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()}
            </Avatar>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>{data.name}</Typography>
              <Typography sx={{ fontSize: '14px', color: '#475569' }}>{data.position}</Typography>
              <Typography
                sx={{
                  fontSize: '13px',
                  color: '#2563EB',
                  textDecoration: 'underline',
                  marginTop: '2px',
                }}
              >
                {data.company}
              </Typography>
            </Box>
            <Box sx={{ marginLeft: 'auto' }}>
              <Rating value={data.rating} readOnly size="small" />
            </Box>
          </Box>

          <Box sx={{ background: '#F1F5F9', borderRadius: 1, padding: 1.5 }}>
            <Typography sx={{ fontSize: '14px', color: '#475569' }}>
              Product Purchased:{' '}
              <Link href="/" className="text-[#2563EB] underline">
                {data.product}
              </Link>
            </Typography>
          </Box>

          <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>{data.title}</Typography>

          <Typography sx={{ fontSize: '15px', color: '#475569' }}>{data.feedback}</Typography>

          
        </Box>
      ))}
    </Box>
  )
}

export default ReviewCard
