import React from 'react'
import { Box, Button, styled, Typography } from '@mui/material'
import { addEllipsis } from "../../utils/commonUtils"
import ButtonGroups from './ButtonGroups';
import { useDispatch } from "react-redux"
import { removeFromCart } from '../../redux/actions/cartActions';

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff
`;

const Image = styled("img")({
    width: 100
})

const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const RemoveButton = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600
`

const CartItems = ({ item }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch = useDispatch()

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

  return (
    <Component>
        <LeftComponent>
            <Image src={item.url} alt="product" />
            <ButtonGroups />
        </LeftComponent>

        <Box style={{ margin: 20 }}>
            <Typography>{ addEllipsis(item.title.longTitle)}</Typography>
            <SmallText>Seller: RetailNet
                <Box component='span'><img src={fassured} alt="flipkart" style={{ width:"50px" , marginLeft:"10px" }}  /></Box>
            </SmallText>
            <Typography style={{ margin: '2opx 0' }}>
                  <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                  <Box component="span" style={{ color: "#878787" }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                  <Box component="span" style={{ color: "#388E3C" }} >{item.price.discount} Off</Box>
            </Typography>
            <RemoveButton onClick={() => removeItemFromCart(item.id)} >Remove</RemoveButton>
        </Box>
    </Component>
  )
}

export default CartItems