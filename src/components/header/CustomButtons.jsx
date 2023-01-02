import React, { useState, useContext } from 'react'
import { Box, Button, Typography, styled, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../../login/loginDialog';
import { DataContext } from '../../context/DataProvider';
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin:' 0 5% 0 auto',
    '& > *': {
        marginRight: '40px',
        fontSize: '16px',
        alignItems: 'center',
     },
     [theme.breakpoints.down('md')]: {
        display: "block"
     }
    }));


const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: "block"
    }

}));


const Loginbutton = styled(Button)`
    color: #2874F0;
    background: #FFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    fonr-weight: 600;
    height: 32px;

    &:hover {
        color: #2874F0;
        background: #FFF;
    }
`

const CustomButtons = () => {

    const { account, setAccount } = useContext(DataContext)

    const [open, setOpen] = useState(false)

    const { cartItems } = useSelector(state => state.cart)

    const openDialog = () => {
        setOpen(true);
    }

  return (
    <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount} /> : 
            <Loginbutton variant='contained' onClick={() => openDialog()} >Login</Loginbutton>
        }

        <Typography style={{ marginTop: 3, width: 150, fontWeight: "bold" }}>Become a Seller</Typography>
        <Typography style={{  marginTop: 3, fontWeight: "bold" }}>More</Typography>

        <Container to='/cart'>
            <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon />
            </Badge>
            <Typography style={{ marginLeft: 10 }} >Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButtons