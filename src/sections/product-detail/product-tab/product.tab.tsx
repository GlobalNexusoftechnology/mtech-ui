'use client';

import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,

} from '@mui/material';
import { CircleCheckBig } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const tabs = ['Overview', 'Specifications'];



const ProductTabs = () => {
  const singleProductData = useSelector((state: RootState) => state.products.selectedProduct)

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  

  return (
    <Box className="bg-white rounded-lg shadow-md p-6 w-full">
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3,width:"100%" }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab} sx={{ textTransform: 'none' }} />
        ))}
      </Tabs>

      {selectedTab === 0 && (
        <Box>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Product Description
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            {singleProductData?.desc}
          </Typography>

          <Typography variant="h6" fontWeight="bold" mb={2}>
            Key Features
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {singleProductData?.keyFeatures.map((feature, i) => (
              <Box
                key={i}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' }, // 2 columns on sm+, full width on mobile
                  backgroundColor: '#f5f7f9',
                  borderRadius: 2,
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <CircleCheckBig color='#22C55E' size={18} />
                <Typography variant="body2">{feature}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {selectedTab === 1 && (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
          }}
        >
          <Box sx={{ flex: '1 1 300px', minWidth: 280 }}>
            {singleProductData?.specifications.slice(0,7).map(([label, value], i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #eee',
                }}
              >
                <Typography variant="body2" fontWeight={500} sx={{background:'#f5f7f9',width:'50%',py: 1.2,px: 2,}}>
                  {label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{py: 1.2,px: 2, textAlign:'left',width:'50%'}}>
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ flex: '1 1 300px', minWidth: 280 }}>
            {singleProductData?.specifications.slice(7,14).map(([label, value], i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #eee',
                }}
              >
                <Typography variant="body2" fontWeight={500} sx={{background:'#f5f7f9',width:'50%',py: 1.2,px: 2,}}>
                  {label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{py: 1.2,px: 2, textAlign:'left',width:'50%'}}>
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>

  );
};

export default ProductTabs;
