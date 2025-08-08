'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  Chip,
} from '@mui/material';
import {
  CheckCircle,
  Truck,
  Clock,
  Headphones,
  Minus,
  Plus,
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import Popup from '@/components/popup/popup';
import { setselectedProduct } from '@/store/slices/productSlice';
import { FullProductType } from '@/types/products';

const ProductContent = () => {
  const [quantity, setQuantity] = useState(1);
  const singleProductData = useSelector((state: RootState) => state.products.selectedProduct)
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <Box sx={{width:{md:'50%', xs:'100%'}}}>
      <Stack direction="row" alignItems="center" spacing={2} mb={1}>
        <Chip label="MTECH" size="small" sx={{ bgcolor: '#DBEAFE', color: '#1D4ED8' }} />
        <Typography variant="body2" color="text.secondary">
          SKU: {singleProductData?.sku}
        </Typography>
      </Stack>

      <Typography variant="h5" fontWeight={600} mb={2}>
        {singleProductData?.title}
      </Typography>

      {/* <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" mb={1}>
        <Stack direction="row" spacing={0.5} alignItems="center">
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} size={16} color="#FACC15" />
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          4.9 (47 reviews)
        </Typography>
        <Box ml="auto">
          <Chip
            label="In Stock (15 available)"
            color="success"
            variant="outlined"
            sx={{ fontSize: 12, fontWeight: 500 }}
          />
        </Box>
      </Stack> */}

      <Stack direction="row" spacing={2} alignItems="flex-end" mb={1}>
        <Typography variant="h4" fontWeight={700} color="#2563EB">
          {singleProductData?.price.amount}
        </Typography>
        {/* <Typography variant="body1" sx={{ textDecoration: 'line-through' }} color="text.secondary">
          ₹95,000
        </Typography>
        <Chip
          label="Save ₹10,000"
          size="small"
          sx={{ bgcolor: '#EF4444', color: '#fff', fontWeight: 500 }}
        /> */}
      </Stack>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Price per piece (excluding taxes and shipping)
      </Typography>

      <Typography variant="subtitle1" fontWeight={600} mb={1}>
        Key Features
      </Typography>
      <Stack spacing={1.5} mb={3}>
        {singleProductData?.keyFeatures.slice(0, 4).map((feature, i) => (
          <Stack key={i} direction="row" alignItems="center" spacing={1}>
            <CheckCircle color="green" size={16} />
            <Typography variant="body2">{feature}</Typography>
          </Stack>
        ))}
      </Stack>

      <Stack direction="row" spacing={4} mb={4}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Truck size={16} color="#2563EB" />
          <Typography variant="body2">Free Installation</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Clock size={16} color="#2563EB" />
          <Typography variant="body2">2-Year Warranty</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Headphones size={16} color="#2563EB" />
          <Typography variant="body2">24/7 Support</Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <Box display="flex" alignItems="center" border="1px solid #ccc" borderRadius={1} px={1}>
          <IconButton onClick={() => setQuantity(Math.max(1, quantity - 1))} size="small">
            <Minus size={18} />
          </IconButton>
          <Typography variant="body1" mx={2}>
            {quantity}
          </Typography>
          <IconButton onClick={() => setQuantity(quantity + 1)} size="small">
            <Plus size={18} />
          </IconButton>
        </Box>

        
        <Button variant="contained" onClick={() => {
          dispatch(setselectedProduct(singleProductData as FullProductType));
          setOpen(true)
        }}
          sx={{ backgroundColor: '#2563EB', fontWeight: 500, textTransform: 'none', color: 'white', width: '100%', marginTop: 2 }}>Get Quote for {quantity} Piece{quantity > 1 ? 's' : ''}</Button>
        <Popup open={open} handleClose={() => setOpen(false)} />
      </Stack>
    </Box>
  );
};

export default ProductContent;
