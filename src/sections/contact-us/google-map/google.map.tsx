// components/GoogleMapEmbed.tsx
'use client';

import { Box } from "@mui/material";

export default function GoogleMap() {
  return (
    <Box sx={{ width:{md:'50%', xs:'100%'}, height: {md:'-webkit-fill-available', xs:'300px'} }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4890746480983!2d73.90109269999999!3d18.5067883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c6246ae46f%3A0xdf796097aa3e09d4!2s12%2C%20Jambhulkar%20Mala%2C%20Wanowrie%2C%20Pune%2C%20Maharashtra%20411040!5e0!3m2!1sen!2sin!4v1754382492785!5m2!1sen!2sin" width="100%" height="100%" style={{borderRadius:'10px'}}  loading="lazy" ></iframe>
    </Box>
  );
}
