'use client'
import { PRODUCTS } from '@/data/products'
import { AppDispatch, RootState } from '@/store'
import { setProducts } from '@/store/slices/productSlice'
import { fetchProducts } from '@/store/thunks/productsThunks'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AboutUs = () => {
  const data  = useSelector((state:RootState) => state.products.value)
  const dispatch = useDispatch<AppDispatch>()
  const handleClick = () => {
    dispatch(setProducts(PRODUCTS))
    console.log(data)
  }

  const {loading, data: apiProd, error} = useSelector((state:RootState) => state.productapi)

  useEffect(() => {
    dispatch(fetchProducts())
    console.log(apiProd)
  }, [dispatch])
  
  return (
    <div>About us
      <button onClick={handleClick}>show data</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>

        {apiProd.map((prod) => (
            <li key={prod.id}>{prod.title}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default AboutUs