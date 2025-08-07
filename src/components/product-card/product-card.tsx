import { Box, Button, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Image from 'next/image';
import React, { useState } from 'react'
import Popup from '../popup/popup';
import { useDispatch } from 'react-redux';
import { setselectedProduct } from '@/store/slices/productSlice';
import { FullProductType, ProductType } from '@/types/products';
import Link from 'next/link';
import { toSlug } from '@/lib/slugified';

interface ProductCardProps {
    product: ProductType;
    sx?: SxProps<Theme>;
}
const ProductCard = ({ product, sx }: ProductCardProps) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    
    return (

        <Box sx={{ background: 'white', borderRadius: '10px', ...sx }}>
            <Image src={product.image} alt='product' width={100} height={100} className='w-full h-[230px] object-cover rounded-t-lg' />
            <Box sx={{
                padding: '24px',
            }}>
                <Link href={`products/${toSlug(product.title)}`}>
                    <Typography sx={{ fontWeight: 700, fontSize: '24px', color: '#2563EB' }}>{product.price.amount}<span style={{ color: "#505050", fontSize: '14px' }}>{product.price.unit}</span></Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: '18px', color: 'black' }}>{product.title}</Typography>
                </Link>
                <div className='flex flex-wrap justify-between gap-y-2 mt-3'>
                    <div className='p-3 bg-[#F8FAFC] border-1 border-[#E4E4E7] w-[48%] rounded-lg'>
                        <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#505050' }}>Cooling</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#000000', marginTop: "2px" }}>{product.specs.cooling}</Typography>
                    </div>
                    <div className='p-3 bg-[#F8FAFC] border-1 border-[#E4E4E7] w-[48%] rounded-lg'>
                        <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#505050' }}>Cooling</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#000000', marginTop: "2px" }}>{product.specs.phase}</Typography>
                    </div>
                    <div className='p-3 bg-[#F8FAFC] border-1 border-[#E4E4E7] w-[48%] rounded-lg'>
                        <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#505050' }}>Cooling</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#000000', marginTop: "2px" }}>{product.specs.capacity}</Typography>
                    </div>
                    <div className='p-3 bg-[#F8FAFC] border-1 border-[#E4E4E7] w-[48%] rounded-lg'>
                        <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#505050' }}>Cooling</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#000000', marginTop: "2px" }}>{product.specs.usage}</Typography>
                    </div>
                </div>
                <Button variant="contained" onClick={() => {
                    dispatch(setselectedProduct(product as FullProductType));
                    setOpen(true)
                }}
                    sx={{ backgroundColor: '#2563EB', fontWeight: 500, textTransform: 'none', color: 'white', width: '100%', marginTop: 2 }}>Get a Quote</Button>
                <Popup open={open} handleClose={() => setOpen(false)} />
            </Box>
        </Box>
    )
}

export default ProductCard