import {  createSlice } from "@reduxjs/toolkit";

interface productInterface {
    value: string[]
}
const initialState:productInterface = {
    value: []
};

// export const fetchProductData = createAsyncThunk("products/fetch", async () => {
//     const res = await axiosInstance.get(`${process.env.NEXT_PUBLIC_API_BASE}/products`)
//     return res.data.products;
// })
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;