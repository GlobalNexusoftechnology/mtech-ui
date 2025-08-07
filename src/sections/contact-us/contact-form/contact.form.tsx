'use client';
import React from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    FormControl,
    InputAdornment,
    MenuItem,

} from '@mui/material';

const countries = [
    { code: '+91', label: 'IN' },
    { code: '+1', label: 'US' },
    { code: '+44', label: 'UK' },
];

export default function ContactForm() {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: {md:'50%', xs:'100%'} }}>
                <Typography variant='h2' sx={{ color: '#000', fontSize: '36px', fontWeight: 700 }}>Get in touch</Typography>
                <Typography sx={{ color: '#505050', fontSize: '20px' }}>Our friendly team would love to hear from you.</Typography>
                <Box sx={{ height: '2px', background: '#2563EB', width: '50%' }}></Box>
                <Box sx={{ mx: 'auto', mt: 2, width: '100%' }}>
                    <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
                        <FormControl fullWidth>
                            <TextField variant="outlined" placeholder="Mitch" label="First name" />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField variant="outlined" placeholder="Last name" label="Last name" />
                        </FormControl>
                    </Box>

                    <Box mt={2}>
                        <FormControl fullWidth>
                            <TextField variant="outlined" placeholder="you@company.com" label="Email" />
                        </FormControl>
                    </Box>

                    <Box mt={2}>
                        <FormControl fullWidth>
                            <TextField
                                variant="outlined"
                                placeholder="+91 1234567890"
                                label="Phone number"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TextField
                                                select
                                                defaultValue={countries[0].label}
                                                variant="standard"
                                                sx={{ width: 60 }}

                                            >
                                                {countries.map((option) => (
                                                    <MenuItem key={option.label} value={option.label}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>
                    </Box>

                    <Box mt={2}>
                        <FormControl fullWidth>
                            <TextField
                                multiline
                                rows={5}
                                variant="outlined"
                                placeholder=""
                                label="Message"
                            />
                        </FormControl>
                    </Box>

                    {/* <Box mt={2}>
                    <FormControlLabel
                        control={<Checkbox />}
                        label={
                            <Typography sx={{ fontSize: 14 }}>
                                <a href="#" style={{ color: '#0F3FDA' }}>privacy policy</a>
                            </Typography>
                        }
                    />
                </Box> */}

                    <Box mt={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                backgroundColor: '#0F3FDA',
                                color: '#fff',
                                borderRadius: 1,
                                textTransform: 'none',
                                py: 1.5,
                                fontWeight: 500,
                            }}
                        >
                            Send message
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
