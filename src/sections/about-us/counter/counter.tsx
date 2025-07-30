import { Box, Typography } from '@mui/material'
import { Award, Calendar, CircleCheck, Smile } from 'lucide-react'
import React from 'react'

const Counter = () => {
  return (
    <section className='py-2 px-4 sm:px-6 lg:px-12'>

    <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '3rem 0rem', flexWrap:'wrap'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width:{md:"24%", xs:'50%'}}}>
            <Box sx={{background: '#2563EB4D', borderRadius: 50, padding: "0.7rem"}}>
                <Calendar color='#2563EB' />
            </Box>
            <Typography variant='h3' sx={{fontSize:'30px', fontWeight: 700}}>21+</Typography>
            <Typography sx={{fontSize:'16px',fontWeight: 500, color:'#747474'}}>Years of Experience</Typography>
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width:{md:"24%", xs:'50%'}}}>
            <Box sx={{background: '#F3E8FF', borderRadius: 50, padding: "0.7rem"}}>
                <Smile color='#8D38C1'/>
            </Box>
            <Typography variant='h3' sx={{fontSize:'30px', fontWeight: 700}}>500+</Typography>
            <Typography sx={{fontSize:'16px',fontWeight: 500, color:'#747474'}}>Happy Customers</Typography>
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width:{md:"24%", xs:'50%'}}}>
            <Box sx={{background: '#22C55E33', borderRadius: 50, padding: "0.7rem"}}>
                <CircleCheck color='#22C55E'/>
            </Box>
            <Typography variant='h3' sx={{fontSize:'30px', fontWeight: 700}}>1000+</Typography>
            <Typography sx={{fontSize:'16px',fontWeight: 500, color:'#747474'}}>Projects Completed</Typography>
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width:{md:"24%", xs:'50%'}}}>
            <Box sx={{background: '#FFEDD54D', borderRadius: 50, padding: "0.7rem"}}>
                <Award color='#E6A54F'/>
            </Box>
            <Typography variant='h3' sx={{fontSize:'30px', fontWeight: 700}}>ISO</Typography>
            <Typography sx={{fontSize:'16px',fontWeight: 500, color:'#747474'}}>Certifications</Typography>
        </Box>
    </Box>
    </section>
  )
}

export default Counter