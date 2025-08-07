import { FullProductType } from '@/types/products';
import { Box, ImageListItem } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProductGalleryProps {
  singleProductData: FullProductType | null;
}

const ProductGallery = ({ singleProductData }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    singleProductData?.image || ''
  );

  if (!singleProductData) return null;

  return (
    <Box sx={{width:{md:'50%', xs:'100%'}}}>
      <Box sx={{ mb: 2 }}>
        <Image
          src={selectedImage}
          alt="Selected Product Image"
          width={400}
          height={400}
          style={{ objectFit: 'cover', height: 450, width: '100%', borderRadius:5 }}
        />
      </Box>

      <Box sx={{display:'flex', gap:2}}>
        {[singleProductData.image, ...(singleProductData.gallery ?? [])].map((img, index) => (
          <ImageListItem
            key={index}
            sx={{
              cursor: 'pointer',
              border: selectedImage === img ? '2px solid #1976d2' : '1px solid #ccc',
              borderRadius: '4px',
              width: 'fit-content'
            }}
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              width={80}
              height={80}
              style={{ objectFit: 'cover', height: 80 }}
            />
          </ImageListItem>
        ))}
      </Box>
    </Box>
  );
};

export default ProductGallery;
