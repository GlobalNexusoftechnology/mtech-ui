import { use } from 'react'
import React from 'react'
import ProductDetail from '@/sections/product-detail/view/product.detail'
import { fromSlug } from '@/lib/slugified';

export async function generateMetadata({params }:{params:Promise<{slug:string}>}) {
  const product = await fromSlug((await params).slug);

  return {
    title: product ? `${product} | MTech` : 'Product Not Found | MTech',
    description: product
      ? `Explore ${product} with top performance and quality.`
      : 'This product could not be found.',
  };
}

const Page = ({params }:{params:Promise<{slug:string}>}) => {
  
  const { slug } = use(params)
  const productName = slug
  

  return (
    <>
      <ProductDetail productName={productName} /> 
    </>
  )
}

export default Page