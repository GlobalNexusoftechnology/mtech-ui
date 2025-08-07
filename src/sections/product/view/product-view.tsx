import Breadcrumb from '@/components/breadcrumb/breadcrumb'
import { Box } from '@mui/material'
import React from 'react'
import ProductFilter from '../filter/product-filter'
import ProductList from '../product-list/product-list'

const ProductView = () => {
    return (
        <>
            <Breadcrumb title='Our Products' desc='Discover our comprehensive range of power solutions designed for industrial and commercial applications' />
            <section className='py-12 px-4 sm:px-6 lg:px-12'>
                <Box sx={{ display:'flex', gap:2, flexDirection: {md:'row', xs:'column'} }}>
                    <ProductFilter />
                    <ProductList />
                </Box>
            </section>
        </>
    )
}

export default ProductView