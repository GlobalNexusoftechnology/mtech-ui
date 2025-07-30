'use client';
import React from 'react';
import { Box, Typography, LinearProgress, Rating } from '@mui/material';
import pageData from '@/data/page-data';

const totalReviews = pageData.reviews.length;

const averageRating = totalReviews
  ? (
      pageData.reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
    ).toFixed(1)
  : '0.0';

const ratingCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

pageData.reviews.forEach((review) => {
  ratingCounts[review.rating] = (ratingCounts[review.rating] || 0) + 1;
});

const ReviewHighlights = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: 2,
        display: 'flex',
        gap: 4,
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: 600,
        marginBottom: 1.5,
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      }}
    >
      <Box sx={{ minWidth: 100 }}>
        <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>{averageRating}</Typography>
        <Rating value={parseFloat(averageRating)} precision={0.1} readOnly />
        <Typography sx={{ fontSize: '14px', color: '#475569' }}>{`(${totalReviews} reviews)`}</Typography>
      </Box>

      <Box sx={{ flex: 1, minWidth: 240, display: 'flex', flexDirection: 'column', gap: 1 }}>
        {[5, 4, 3, 2, 1].map((rating) => {
          const count = ratingCounts[rating] || 0;
          const percentage = totalReviews ? (count / totalReviews) * 100 : 0;

          return (
            <Box key={rating} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography sx={{ fontSize: '14px', width: 12 }}>{rating}</Typography>
              <LinearProgress
                variant="determinate"
                value={percentage}
                sx={{
                  flex: 1,
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: '#E2E8F0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#2563EB',
                  },
                }}
              />
              <Typography sx={{ fontSize: '14px', width: 30, textAlign: 'right' }}>{count}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ReviewHighlights;
