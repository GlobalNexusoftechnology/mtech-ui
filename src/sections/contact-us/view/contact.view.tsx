import React from 'react'
import ContactForm from '../contact-form/contact.form'
import GoogleMap from '../google-map/google.map'
import { Box } from '@mui/material'
import ContactInfo from '../contact-info/contact.info'

const ContactView = () => {
    return (
        <div className="py-2 px-6 md:px-12 flex justify-between items-center flex-col bg-white">
            <Box sx={{ display: 'flex', gap: 10, paddingY: 5, width: '100%', flexDirection:{md:'row', xs:'column'} }}>
                <ContactForm />
                <GoogleMap />
            </Box>
            <ContactInfo />
        </div>
    )
}

export default ContactView