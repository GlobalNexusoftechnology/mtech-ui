import ProductCard from '@/components/product-card/product-card'
import { RootState } from '@/store'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const RelatedProduct = () => {
    const singleProductData = useSelector((state: RootState) => state.products.selectedProduct)
    const ProductData = useSelector((state: RootState) => state.products.products)
    const relatedProduct = ProductData.filter((product) => product.category === singleProductData?.category)
    return (
        <Box className="bg-white rounded-lg shadow-md p-6 w-full mt-6">
            <Typography variant="h5" fontWeight={600} mb={2}>Related Product</Typography>
            <Box sx={{ display: 'flex', justifyContent:'space-between', flexWrap:'wrap', gap:2 }}>
                {[...relatedProduct]
                    .sort(() => Math.random() - 0.5) 
                    .slice(0, 3)                     
                    .map((product, index) => (
                        <ProductCard
                            product={product}
                            sx={{ width: { md: '31%', sm: '48%', xs: '98%' }, boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;' }}
                            key={index}
                        />
                    ))}
            </Box>
        </Box>
    )
}

export default RelatedProduct