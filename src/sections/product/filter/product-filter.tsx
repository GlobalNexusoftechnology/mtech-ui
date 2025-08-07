'use client'
import { CategoriesEnum } from '@/data/category';
import featuredProducts from '@/data/product-data'
import { setCategoryFilter } from '@/store/slices/productSlice';
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react'
import { useDispatch } from 'react-redux';

const ProductFilter = () => {
    const category = Object.values(CategoriesEnum)
    const dispatch = useDispatch();

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selected = event.target.value;
        dispatch(setCategoryFilter(selected === 'All' ? ["All"] : [selected]));
    };
    
    return (
        <Box sx={{ background: '#FFF', borderRadius: 2, padding: 2, height: '100%',maxWidth:{md:'16.25rem', xs:'100%'} }}>
            <Typography sx={{ fontSize: '18px', fontWeight: 500, color: '#000', marginBottom: 2 }}>Filters</Typography>
            <Autocomplete
                multiple
                limitTags={2}
                id="tags-outlined"
                onChange={(event, value) => {
                    dispatch(setCategoryFilter(value.length > 0 ? value : ['All']));
                }}

                options={featuredProducts.map((option) => option.title)}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Search Products" placeholder="Search Products" />
                )}
                sx={{ width: '100%', borderColor: '#CCCCCC' }}
            />

            <FormControl sx={{ marginTop: 3 }}>
                <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={CategoriesEnum.All}
                    name="radio-buttons-group"
                    onChange={handleCategoryChange}
                >
                    {category.map((category) => (
                        <FormControlLabel sx={{ fontSize: '14px' }} key={category} value={category} control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />}
                            label={
                                <Typography sx={{ fontSize: '14px' }}>
                                    {category}
                                </Typography>
                            } />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default ProductFilter