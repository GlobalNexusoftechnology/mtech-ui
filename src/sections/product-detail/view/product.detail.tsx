'use client'
import React, { useEffect } from 'react'
import ProductGallery from '../product-gallery/product.gallery'
import ProductContent from '../product-content/product.content'
import { Box } from '@mui/material'
import ProductTabs from '../product-tab/product.tab'
import RelatedProduct from '../related-product/related.product'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { setselectedProduct } from '@/store/slices/productSlice'

interface ProName {
  productName:string
}
const ProductDetail = ({productName}:ProName) => {

  const dispatch = useDispatch();
    const singleProduct = useSelector((state: RootState) => state.products.products.filter((product) => product.slug === productName))
      console.log(singleProduct[0].title, productName)
    
    useEffect(() => {
      if (singleProduct.length > 0) {
        dispatch(setselectedProduct(singleProduct[0]));
      }
    }, []);

  return (
    <div className="py-2 px-6 md:px-12 flex justify-between items-center flex-col">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingY: 5, gap: 5, flexDirection:{md:'row', xs:'column'} }}>
        <ProductGallery />
        <ProductContent />
      </Box>
      <ProductTabs />
      <RelatedProduct />
    </div>
  )
}

export default ProductDetail