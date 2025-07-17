import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import FormTab from '../form-tabs/tabs';
import { MessageSquare } from 'lucide-react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    borderRadius: '10px',
};

type PopupProps = {
    open: boolean;
    handleClose: () => void;
};
const Popup = ({ open, handleClose }: PopupProps) => {

    return (
        <Modal

            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            
        >
            <Box sx={style}>
                <Box sx={{
                    background: "#2563EB",
                    borderRadius: "7px 7px 0px 0px",
                    padding: 2.5,
                    display: 'flex',
                    gap: 2,

                }}>
                    <div style={{
                        background:'#5081ED',padding:12, borderRadius:8,
                        display: 'flex', alignItems: 'center'
                    }}>
                        <MessageSquare color='white' />
                    </div>
                    <div>
                        <Typography
                            sx={{ fontSize: "20px", fontWeight: 700, color: "white", }}
                        >
                            Get Your Quote
                        </Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: 400, color: "white", }}>Connect with our power solution experts</Typography>
                    </div>
                </Box>
                <FormTab />
            </Box>
        </Modal>
    )
}

export default Popup