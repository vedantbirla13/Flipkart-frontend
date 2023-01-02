import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, ListItem, List } from "@mui/material"
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from "react-router-dom"
import { Menu } from "@mui/icons-material"

const StyledHeader = styled(AppBar)`
   background: #2874f0; 
   height: 55px
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    text-decoration: none;
    color: inherit
`

const Subheading = styled(Typography)`
    font-size: 10px;
    font-style: italic
`

const PlusImage = styled("img")({
    width: 10,
    height: 10,
    marginLeft: 4
})

const CustomButton = styled(Box)(({ theme}) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}));


const MenuButton = styled(IconButton)(({theme}) => ({
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "block"
    }
}));




const Header = () => {


    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    const list = () => (
        <Box style={{ width: 200 }} onClose={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    )
    
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
        <Toolbar style={{ minHeight: 55 }}>
            <MenuButton color='inherit' onClick={handleOpen}>
                <Menu />
            </MenuButton>

            <Drawer open={open} onClose={handleClose}>
                { list() }
            </Drawer>

            <Component to='/'>
                <Box>
                    <img src={logoURL} alt="logo" style={{ width: "75px" }} />
                    <Box style={{ display: "flex" }}>
                        <Subheading>Explore &nbsp;
                            <Box component="span" style={{ color: "#FFE500" }} >Plus</Box>
                        </Subheading>
                            <PlusImage src={subURL} alt="sublogo" />
                    </Box>
                </Box>
            </Component>
            <Search />
            <CustomButton>
                <CustomButtons />
            </CustomButton>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header