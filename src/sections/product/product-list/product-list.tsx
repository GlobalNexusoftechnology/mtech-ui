'use client'
import ProductCard from '@/components/product-card/product-card'
import { RootState } from '@/store'
import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductList = () => {
const product = useSelector((state: RootState) =>
  state.products.products.filter((product) =>
    state.products.categoryFilter.includes('All')
      ? true
      : state.products.categoryFilter.includes(product.title) ||
        state.products.categoryFilter.includes(product.category)
  )
);

  return (
    <Box sx={{ borderRadius: 2, display: 'flex', flexWrap:'wrap', gap:3, width: {md:'75%', xs:'100%'} }}>
        {product.map((product, index)=>(
            <ProductCard sx={{ width: { md: '31%', sm: '48%', xs: '98%' } }} key={index} product={product} />
        ))}
    </Box>
  )
}

export default ProductList