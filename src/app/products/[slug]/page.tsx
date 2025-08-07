'use client'
import { use, useEffect } from 'react'
import { fromSlug } from '@/lib/slugified'
import { RootState } from '@/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setselectedProduct } from '@/store/slices/productSlice'
import ProductDetail from '@/sections/product-detail/view/product.detail'

const Page = ({params }:{params:Promise<{slug:string}>}) => {
  
  const { slug } = use(params)
  const productName = fromSlug(slug)
  const dispatch = useDispatch();
  const singleProduct = useSelector((state: RootState) => state.products.products.filter((product) => product.title === productName))
  
  useEffect(() => {
    if (singleProduct.length > 0) {
      dispatch(setselectedProduct(singleProduct[0]));
    }
  }, [singleProduct, dispatch]);

  return (
    <>
      <ProductDetail /> 
    </>
  )
}

export default Page