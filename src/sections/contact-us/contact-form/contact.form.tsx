'use client';

import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    FormControl,
    Alert,
} from '@mui/material';
import axiosInstance from '@/lib/axios';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    

    const [success, setSuccess] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted Form Data:', formData);
        try {
            const res = await axiosInstance.post('/api/submit-form', formData)
            if (res) {
                setSuccess(true)
                setFormData({ phone: "", email: "", message: "", firstName: "", lastName: "" })

            }
        } catch (error) {
            console.log('form contact api fail', error)
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: { md: '50%', xs: '100%' } }}
        >
            <Typography variant="h2" sx={{ color: '#000', fontSize: '36px', fontWeight: 700 }}>
                Get in touch
            </Typography>
            <Typography sx={{ color: '#505050', fontSize: '20px' }}>
                Our friendly team would love to hear from you.
            </Typography>
            <Box sx={{ height: '2px', background: '#2563EB', width: '50%' }}></Box>
            <Box sx={{ mx: 'auto', mt: 2, width: '100%' }}>
                <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
                    <FormControl fullWidth>
                        <TextField
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="Mitch"
                            label="First name"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="Last name"
                            label="Last name"
                        />
                    </FormControl>
                </Box>

                <Box mt={2}>
                    <FormControl fullWidth>
                        <TextField
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="you@company.com"
                            label="Email"
                            type="email"
                        />
                    </FormControl>
                </Box>

                <Box mt={2}>
                    <FormControl fullWidth>
                        <TextField
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="1234567890"
                            label="Phone number"
                            
                        />
                    </FormControl>
                </Box>

                <Box mt={2}>
                    <FormControl fullWidth>
                        <TextField
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            multiline
                            rows={5}
                            variant="outlined"
                            placeholder=""
                            label="Message"
                        />
                    </FormControl>
                </Box>

                <Box mt={2}>
                    <Button
                        fullWidth
                        type="submit"
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
                    {success && (
                        <Alert severity="success" sx={{ mt: 1 }}>
                            Form submitted successfully!
                        </Alert>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
