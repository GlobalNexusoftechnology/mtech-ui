import { Box } from '@mui/material'
import React from 'react'
import TeamCard from './team-card'
import pageData from '@/data/page-data'

const Team = () => {
    
  return (
    <Box sx={{display: 'flex', gap:2,flexWrap:'wrap', justifyContent:'space-between'}}>
        {pageData.team.map((item, ind)=>(
        <TeamCard key={ind} name={item.name} description={item.description} experience={item.experience} position={item.position} expertise={item.expertise} />
        ))}
    </Box>
  )
}

export default Team