'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { Alert, Button, TextField, Typography } from '@mui/material';
import { Clock, MapPin, PackageSearch, PhoneCall } from 'lucide-react';
import axiosInstance from '@/lib/axios';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function FormTab() {
    const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct)
  const [success, setSuccess] = React.useState(false);

    const [formData, setFormData] = React.useState({
        email: '',
        phone: '',
        message: '',
        product: selectedProduct?.title,
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await axiosInstance.post('/api/submit-form', formData)
            if (res) {
                setSuccess(true)
                setFormData({ phone: "", email: "", message: "", product: "" })
            }
        } catch (error) {
            console.log('form api fail', error)
        }
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '100%', height: '76vh' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Call Now" {...a11yProps(0)} sx={{
                        width: '50%',
                        background: value == 1 ? "white" : "#EFF6FF",
                        textTransform: 'capitalize',
                        fontSize: '14px',
                        fontWeight: 400,
                    }} />
                    <Tab label="Send Email" {...a11yProps(1)} sx={{
                        width: '50%',
                        background: value == 0 ? "white" : "#EFF6FF",
                        textTransform: 'capitalize',
                        fontSize: '14px',
                        fontWeight: 400,
                    }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>

                <Box sx={{
                    borderRadius: "7px 7px 0px 0px",
                    display: 'flex',
                    gap: 2,
                    alignItems: 'center'

                }}>
                    <div style={{
                        background: '#2563EB4D', padding: 12, borderRadius: 50,
                        display: 'flex', alignItems: 'center', height: "fit-content"
                    }}>
                        <PackageSearch color='#0D559A' />
                    </div>
                    <div>
                        <Typography
                            sx={{
                                fontSize: '18px',
                                fontWeight: 700,
                                color: 'black',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '220px',
                            }}
                        >
                            {selectedProduct?.title}
                        </Typography>


                        <Typography sx={{ fontSize: "14px", fontWeight: 400, color: "black", }}>{selectedProduct?.category}</Typography>
                    </div>
                </Box>
                <Box sx={{
                    background: "#EFF6FF",
                    borderRadius: 1,
                    padding: 2,
                    marginTop: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}>
                    <Box sx={{
                        borderRadius: "7px 7px 0px 0px",
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center'
                    }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', height: "fit-content"
                        }}>
                            <PhoneCall color='#0D559A' />
                        </div>
                        <div>
                            <Typography
                                sx={{ fontSize: "14px", fontWeight: 600, color: "black", }}
                            >
                                Direct Sales Line
                            </Typography>
                            <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#2563EB", }}>+91 98765 43210</Typography>
                        </div>
                    </Box>

                    <Box sx={{
                        borderRadius: "7px 7px 0px 0px",
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center'
                    }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', height: "fit-content"
                        }}>
                            <Clock color="#505050" />
                        </div>
                        <div>
                            <Typography
                                sx={{ fontSize: "14px", fontWeight: 600, color: "#505050", }}
                            >
                                Available Hours
                            </Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#898989", }}>Mon-Sat: 9:00 AM - 7:00 PM</Typography>
                        </div>
                    </Box>

                    <Box sx={{
                        borderRadius: "7px 7px 0px 0px",
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center'
                    }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', height: "fit-content"
                        }}>
                            <MapPin color="#505050" />
                        </div>
                        <div>
                            <Typography
                                sx={{ fontSize: "14px", fontWeight: 600, color: "#505050", }}
                            >
                                Service Area
                            </Typography>
                            <Typography sx={{ fontSize: "16px", fontWeight: 500, color: "#898989", }}>Pan India Support</Typography>
                        </div>
                    </Box>
                </Box>

                <Button variant="contained" sx={{ backgroundColor: '#2563EB', fontWeight: 600, fontSize: "16px", textTransform: 'none', color: 'white', width: '100%', marginTop: 2 }}>Call Now</Button>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.2,
                        width: '100%',
                        maxWidth: 500,
                        margin: '0 auto',
                    }}
                >
                    <TextField
                        name="product"
                        sx={{ display: 'none' }}
                        value={selectedProduct?.title}
                        onChange={handleFormChange}
                        required
                    />

                    <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required


                    />

                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required


                    />


                    <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        minRows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        required

                    />

                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            backgroundColor: '#2563EB',
                            fontWeight: 600,
                            fontSize: '14px',
                            textTransform: 'none',
                            color: 'white',
                            width: '100%',
                            py: 1.2,
                            mt: 1,
                        }}
                    >
                        Send Email
                    </Button>
                    {success && (
                        <Alert severity="success" sx={{ mt: 1 }}>
                            Form submitted successfully!
                        </Alert>
                    )}
                </Box>

            </CustomTabPanel>

        </Box>
    );
}