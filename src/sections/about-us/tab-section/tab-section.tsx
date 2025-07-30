'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import OurCompany from './our-company';
import OurCore from './our-core';
import Team from './team';

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

export default function TabSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className='py-2 px-4 sm:px-6 lg:px-12'>

    <Box sx={{ width: '100%', background: '#FFF', borderRadius: 3, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', marginBottom:4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Our Company" {...a11yProps(0)} />
          <Tab label="Our Team" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{display: 'flex', gap:4, flexWrap: "wrap"}}>
            <OurCompany />
            <OurCore />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Team />
      </CustomTabPanel>
      
    </Box>
    </section>
  );
}