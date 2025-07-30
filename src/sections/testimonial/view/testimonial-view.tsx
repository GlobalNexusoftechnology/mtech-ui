import React from 'react'
import ReviewList from '../review-list/review-list'
import Breadcrumb from '@/components/breadcrumb/breadcrumb'
import { Box } from '@mui/material'
import ReviewCard from '../review-card/review-card'
import ReviewHighlights from '../review-highlights/review-highlights'

const TestimonialView = () => {
    return (
        <>
            <Breadcrumb title="Customer Reviews & Testimonials" desc='Read what our customers say about MITECH power solutions. Real experiences from real businesses across India' />
            <section className='py-2 px-4 sm:px-6 lg:px-12 mt-10 mb-10'>
                <Box sx={{display:'flex', gap:1.5, flexWrap: 'wrap'}}>
                    <Box sx={{ width: {md:'49%', sm:'100%'}, height: 'fit-content'}}>
                        <ReviewHighlights />
                        <ReviewCard />
                    </Box>
                    <Box sx={{ background: '#fff', padding: 1.5, borderRadius: 3, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', width: {md:'49%', sm:'100%'}, height: 'fit-content'}}>
                        <ReviewList />
                    </Box>
                </Box>
            </section>
        </>
    )
}

export default TestimonialView