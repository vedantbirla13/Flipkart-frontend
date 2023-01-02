import React, { useState } from 'react'
import { Box, Menu, MenuItem, Typography, styled } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px;

`

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 5px
`

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false)

    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const logout = () => {
        setAccount('')
    }

  return (
    <>
        <Box onClick={handleClick}>
             <Typography style={{ marginTop: 2, cursor: "pointer"}}>{account}</Typography>    
        </Box>
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <MenuItem onClick={() => {handleClose(); logout(); }}>
            <PowerSettingsNewIcon color="primary" fontSize="small"  />
            <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  )
}

export default Profile