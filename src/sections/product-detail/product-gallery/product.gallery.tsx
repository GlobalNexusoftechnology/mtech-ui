'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Box, ImageListItem } from '@mui/material';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ProductGallery = () => {
  const product = useSelector((state: RootState) => state.products.selectedProduct);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (product?.image) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (!product) return null;

  const images = [product.image, ...(product.gallery ?? [])];

  return (
    <Box sx={{ width: { md: '50%', xs: '100%' } }}>
      {selectedImage && (
        <Box sx={{ mb: 2 }}>
          <Image
            src={selectedImage}
            alt="Main Product Image"
            width={400}
            height={400}
            style={{ objectFit: 'cover', height: 450, width: '100%', borderRadius: 5 }}
          />
        </Box>
      )}

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {images.map((img, index) => (
          <ImageListItem
            key={index}
            sx={{
              cursor: 'pointer',
              border: selectedImage === img ? '2px solid #1976d2' : '1px solid #ccc',
              borderRadius: '4px',
              overflow: 'hidden',
              width: 80,
              height: 80,
            }}
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              width={80}
              height={80}
              style={{ objectFit: 'cover', height:'80px' }}
            />
          </ImageListItem>
        ))}
      </Box>
    </Box>
  );
};

export default ProductGallery;
