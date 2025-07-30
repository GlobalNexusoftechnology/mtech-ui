import { Box, Typography } from '@mui/material'
import React from 'react'

const OurCompany = () => {
    return (
        <Box sx={{width: {md:'50%', sm:'100%'}}}>
            <Typography variant='h5' sx={{ fontSize: '20px', fontWeight: 600, marginBottom: 3 }}>Excellence in Power Technology</Typography>
            <Typography sx={{ color: '#505050', fontSize: '16px', marginBottom: 1 }}>Established in 2003, M-Tech Power Solutions has been at the forefront of providing innovative power solutions across India. We specialize in manufacturing, wholesaling, and servicing power inverters, voltage stabilizers, UPS systems, and comprehensive power protection equipment.</Typography>
            <Typography sx={{ color: '#505050', fontSize: '16px', marginBottom: 1 }}>Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for businesses ranging from small enterprises to large industrial facilities. We combine cutting-edge technology with deep industry expertise to deliver solutions that truly make a difference.</Typography>
            <Box sx={{ display: 'flex', gap:3, marginTop: 3, flexWrap:'wrap' }}>
                <Typography sx={{ color: '#2563EB', fontSize: '14px', fontWeight: 600, background: '#DBEAFE', padding: '8px 16px', borderRadius: 5 }}>Manufacturing</Typography>
                <Typography sx={{ color: '#22C55E', fontSize: '14px', fontWeight: 600, background: '#DCFCE7', padding: '8px 16px', borderRadius: 5 }}>Wholesale</Typography>
                <Typography sx={{ color: '#8D38C1', fontSize: '14px', fontWeight: 600, background: '#F3E8FF', padding: '8px 16px', borderRadius: 5 }}>Service</Typography>
                <Typography sx={{ color: '#E6A54F', fontSize: '14px', fontWeight: 600, background: '#FFEDD5', padding: '8px 16px', borderRadius: 5 }}>Consultation</Typography>
            </Box>
        </Box>
    )
}

export default OurCompany