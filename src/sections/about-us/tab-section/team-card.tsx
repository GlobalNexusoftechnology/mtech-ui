import { Box, Typography } from '@mui/material'
import React from 'react'

interface TeamProp {
    name: string, 
    description: string, 
    experience: string, 
    position: string, 
    expertise: string
}
const TeamCard = ({name, description, experience, position, expertise}:TeamProp) => {

  return (
    <Box sx={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px;', padding: "1.3rem", borderRadius:1, width: {md:'23%', sm:"100%"}}}>
        <Typography variant='h5' sx={{ fontSize: '18px', fontWeight: 600, marginBottom: 1 }}>{name}</Typography>
        <Typography sx={{ color: '#2563EB', fontSize: '16px', marginBottom: 1 }}>{position}</Typography>
        <Typography sx={{ color: '#747474', fontSize: '16px', marginBottom: 1 }}>{experience}</Typography>
        <Typography sx={{ color: '#747474', fontSize: '16px', marginBottom: 1 }}>{description}</Typography>
        <Box sx={{background:"#EFF1F3", padding:1, borderRadius: 3}} >
            <Typography sx={{ color: '#505050', fontSize: '12px', marginBottom: 1 }}>Expertise:</Typography>
            <Typography sx={{ color: '#000000', fontSize: '14px', marginBottom: 1 }}>{expertise}</Typography>
        </Box>
        
    </Box>
  )
}

export default TeamCard