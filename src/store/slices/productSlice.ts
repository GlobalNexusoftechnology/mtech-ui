import featuredProducts from "@/data/product-data";
import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductType = typeof featuredProducts[0];

interface ProductState {
  products: ProductType[];
  selectedProduct: ProductType | null;
}

const initialState: ProductState = {
  products: featuredProducts,
  selectedProduct: null,
};

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setselectedProduct: (state, action: PayloadAction<typeof featuredProducts[0]>) => {
            state.selectedProduct = action.payload;
        }
    },
})

export const {setselectedProduct} = productSlice.actions;
export default productSlice.reducer;