'use client';
import { Box, Divider, Typography } from '@mui/material';

export default function ContactInfo() {
    return (
        <>
            <Box sx={{ height: '2px', background: '#2563EB', width: '80%', marginY:5 }}></Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: { xs: 'center', md: 'center' },
                    gap: { xs: 3, md: 0 },
                    px: { xs: 2, sm: 4, md: 10 },
                    py: { xs: 3, sm: 4, md: 5 },
                    width: "100%"
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <Typography sx={{marginBottom:1}}>OFFICE HOURS</Typography>
                    <Typography sx={{ color: '#002F87', fontWeight: 500 }}>Monday - Friday</Typography>
                    <Typography sx={{ color: '#002F87', fontWeight: 500 }}>8:00 am to 5:00pm</Typography>
                </Box>

                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, mx: 4 }} />

                <Box sx={{ flex: 1 }}>
                    <Typography sx={{marginBottom:1}}>OUR ADDRESS</Typography>

                    <Typography sx={{ color: '#002F87', fontWeight: 500 }}>
                        12, Jambhulkar Mala, Wanowrie<br />
                        Pune, Maharashtra 411040, India
                    </Typography>
                </Box>

                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, mx: 4 }} />

                <Box sx={{ flex: 1 }}>
                    <Typography sx={{marginBottom:1}} >REACH OUT TO US </Typography>

                    <Typography sx={{ color: '#002F87', fontWeight: 500 }}>+91 9372435979</Typography>
                    <Typography sx={{ color: '#002F87', fontWeight: 500 }}>+91 1234567890</Typography>
                </Box>
            </Box>
        </>
    );
}
