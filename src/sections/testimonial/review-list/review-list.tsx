'use client'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Box } from '@mui/material'
import { MessageSquare } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Plant Manager',
    company: 'ABC Manufacturing Ltd',
    message: 'MITECH has been our trusted partner for power solutions for over 3 years',
    avatar: '/static/images/avatar/1.jpg'
  },
  {
    name: 'Sneha Sharma',
    role: 'Operations Head',
    company: 'BrightEnergy Pvt Ltd',
    message: 'We’ve seen remarkable stability in our operations since switching to MITECH systems',
    avatar: '/static/images/avatar/2.jpg'
  },
  {
    name: 'Alok Verma',
    role: 'Chief Engineer',
    company: 'PowerBuild Co.',
    message: 'Reliable and efficient – MITECH has exceeded our expectations every time',
    avatar: '/static/images/avatar/3.jpg'
  },
  {
    name: 'Neha Patel',
    role: 'Director',
    company: 'GreenTech Solutions',
    message: 'Top-notch customer service and quality equipment from MITECH',
    avatar: '/static/images/avatar/4.jpg'
  }
]

export default function ReviewList() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
          marginBottom: 3
        }}
      >
        <Box
          sx={{
            background: '#5081ED',
            padding: 1.5,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <MessageSquare color="white" />
        </Box>
        <Typography sx={{ fontSize: '20px', fontWeight: 700, color: '#000' }}>
          Featured Testimonials
        </Typography>
      </Box>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {testimonials.map((testimonial, index) => (
          <ListItem
            key={index}
            alignItems="flex-start"
            sx={{ background: '#F8FAFC', borderRadius: 3, marginBottom: 1 }}
          >
            <ListItemAvatar>
              <Avatar
                sx={{
                  bgcolor: '#2563EB4D',
                  color: '#0D559A',
                  fontWeight: 700,
                  fontSize: '16px'
                }}
                alt={testimonial.name}
                src={testimonial.avatar}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ color: '#000', fontWeight: 700, fontSize: '16px' }}>
                  {testimonial.name}
                </Typography>
              }
              secondary={
                <Box sx={{ display: 'flex', gap: 4, flexDirection: {md:'row', xs:'column'}}}>
                  <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="body2"
                      sx={{ color: '#747474', fontWeight: 400, fontSize: '14px' }}
                    >
                      {testimonial.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#2563EB', fontWeight: 400, fontSize: '12px' }}
                    >
                      {testimonial.company}
                    </Typography>
                  </Box>
                  <Box >
                    <Typography
                      sx={{
                        color: '#000000',
                        fontWeight: 400,
                        fontSize: '14px',
                        fontStyle: 'italic'
                      }}
                    >
                      {testimonial.message}
                    </Typography>
                  </Box>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
