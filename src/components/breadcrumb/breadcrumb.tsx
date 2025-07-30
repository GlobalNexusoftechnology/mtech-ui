import { Box, Typography } from '@mui/material'
import React from 'react'

interface breadcrumb {
    title: string,
    desc: string
}
const Breadcrumb = ({title, desc}:breadcrumb) => {
  return (
    <Box sx={{backgroundImage: 'linear-gradient(90deg, #182e6e 0%, #163083 35%, #0c1323 100%)', textAlign:'center', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant='h2' sx={{ fontWeight: 700, fontSize: {md:'60px', xs:'40px'}, color: 'white', width: {md:'50%',sx:'100%'} }}>{title}</Typography>
        <Typography  sx={{ fontWeight: 500, fontSize: '18px', color: 'white' }}>{desc}</Typography>
    </Box>
  )
}

export default Breadcrumb