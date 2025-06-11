import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/products`);
    return res.data.products;
  }
);
