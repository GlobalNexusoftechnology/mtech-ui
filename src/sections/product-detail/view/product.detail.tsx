import React from 'react'
import ProductGallery from '../product-gallery/product.gallery'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ProductContent from '../product-content/product.content'
import { Box } from '@mui/material'
import ProductTabs from '../product-tab/product.tab'
import RelatedProduct from '../related-product/related.product'
import { FullProductType } from '@/types/products'

const ProductDetail = () => {
  const singleProductData = useSelector((state: RootState) => state.products.selectedProduct)

  return (
    <div className="py-2 px-6 md:px-12 flex justify-between items-center flex-col">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingY: 5, gap: 5, flexDirection:{md:'row', xs:'column'} }}>
        <ProductGallery singleProductData={singleProductData as FullProductType} />
        <ProductContent />
      </Box>
      <ProductTabs />
      <RelatedProduct />
    </div>
  )
}

export default ProductDetail