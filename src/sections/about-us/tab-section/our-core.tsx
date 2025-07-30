import { Box, Typography } from '@mui/material'
import { Award, Calendar, CircleCheck, Smile } from 'lucide-react'
import React from 'react'

const OurCore = () => {
  return (
    <Box sx={{width: {md:'46%',sm:"100%"}}}>
        <Typography variant='h5' sx={{ fontSize: '20px', fontWeight: 600, marginBottom: 3 }}>Our Core Values</Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap:3}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '46%',textAlign:'center', gap: 1}}>
                    <Box sx={{background: '#2563EB4D', borderRadius: 50, padding: "0.7rem"}}>
                        <Calendar color='#2563EB' />
                    </Box>
                    <Typography variant='h3' sx={{fontSize:'22px', fontWeight: 700}}>Quality First</Typography>
                    <Typography sx={{fontSize:'16px',fontWeight: 500, color:'#747474'}}>Quality is non-negotiable</Typography>
                </Box>
        
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '46%',textAlign:'center', gap: 1}}>
                    <Box sx={{background: '#F3E8FF', borderRadius: 50, padding: "0.7rem"}}>
                        <Smile color='#8D38C1'/>
                    </Box>
                    <Typography variant='h3' sx={{fontSize:'22px', fontWeight: 700}}>Customer-Centric</Typography>
                    <Typography sx={{fontSize:'16px',fontWeight: 500, color:'#747474'}}>Customers are our priority</Typography>
                </Box>
        
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '46%',textAlign:'center', gap: 1}}>
                    <Box sx={{background: '#22C55E33', borderRadius: 50, padding: "0.7rem"}}>
                        <CircleCheck color='#22C55E'/>
                    </Box>
                    <Typography variant='h3' sx={{fontSize:'22px', fontWeight: 700}}>Innovation</Typography>
                    <Typography sx={{fontSize:'16px',fontWeight: 500, color:'#747474'}}>Innovating power solutions</Typography>
                </Box>
        
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '46%',textAlign:'center', gap: 1}}>
                    <Box sx={{background: '#FFEDD54D', borderRadius: 50, padding: "0.7rem"}}>
                        <Award color='#E6A54F'/>
                    </Box>
                    <Typography variant='h3' sx={{fontSize:'22px', fontWeight: 700}}>Integrity</Typography>
                    <Typography sx={{fontSize:'16px',fontWeight: 500, color:'#747474'}}>Honest, transparent, ethical</Typography>
                </Box>
            </Box>
    </Box>
  )
}

export default OurCore