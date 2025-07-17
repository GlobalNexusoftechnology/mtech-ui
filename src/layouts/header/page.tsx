'use client';
import React, { useState } from 'react';
import TopHeader from '../top-header/page';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { Button, Drawer, IconButton } from '@mui/material';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <TopHeader />
      <header className="py-2 px-6 md:px-12 flex justify-between items-center">
        <Image src="/logo/logo-mtech.png" alt="Logo" width={160} height={80} />
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-base font-medium flex gap-1 items-center">Products <ChevronDown size={16} /></Link>
          <Link href="/" className="text-base font-medium flex gap-1 items-center">Service</Link>
          <Link href="/" className="text-base font-medium flex gap-1 items-center">About Us</Link>
          <Link href="/" className="text-base font-medium flex gap-1 items-center">Contact Us</Link>
        </nav>
        <div className="hidden md:flex gap-2">
          <Button
            variant="outlined"
            sx={{
              border: '1px solid #1E3EA1',
              color: '#1E3EA1',
              fontWeight: 500,
              textTransform: 'none',
              display: 'flex',
              gap: 1.3,
              '&:hover': {
                backgroundColor: '#1E3EA110',
                borderColor: '#1E3EA1',
              },
            }}
          >
            <Phone size={15} />
            Call Us
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1E3EA1',
              fontWeight: 500,
              textTransform: 'none',
            }}
          >
            Get a Quote
          </Button>
        </div>
        <div className="block lg:hidden">

        <IconButton  onClick={() => setMobileMenuOpen(true)}>
  <Menu />
</IconButton>
        </div>

        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="w-64 p-5">
            <div className="flex justify-between items-center mb-4">
              <Image src="/logo/logo-mtech.png" alt="Logo" width={120} height={60} />
              <IconButton onClick={() => setMobileMenuOpen(false)}>
                <X />
              </IconButton>
            </div>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-base font-medium flex items-center gap-1">Products <ChevronDown size={16} /></Link>
              <Link href="/" className="text-base font-medium">Service</Link>
              <Link href="/" className="text-base font-medium">About Us</Link>
              <Link href="/" className="text-base font-medium">Contact Us</Link>
            </nav>
            <div className="mt-6 flex flex-col gap-2">
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  border: '1px solid #1E3EA1',
                  color: '#1E3EA1',
                  fontWeight: 500,
                  textTransform: 'none',
                }}
              >
                <Phone size={15} />
                Call Us
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#1E3EA1',
                  fontWeight: 500,
                  textTransform: 'none',
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </Drawer>
      </header>
    </>
  );
};

export default Header;
