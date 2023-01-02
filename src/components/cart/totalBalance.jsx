import { useEffect } from 'react';
import React, { useState } from 'react'
import { Box, Typography,styled } from "@mui/material"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0
`;

const Heading = styled(Typography)`
  color: #878787
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 14px
  }
  & > h6 {
    margin-bottom: 20px
  }
`;

const Discount = styled(Typography)`
    color: green;
    font-weight: 500;
`

const Price = styled(Box)`
    float: right;
`

const Right = styled(Typography)`
    float: right;
    color: green
`;

const LastComponent = styled(Box)`
  margin: 20px   
`;

const LastHeading = styled(Typography)`
    color: #878787;
    display: flex;
    text-align: center;
    justify-content: center;
    vertical-align: baseline
`


const TotalBalance = ({ cartItems }) => {

  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    totalAmount();
  }, [cartItems])
  

  const totalAmount = () => {
    let price = 0, discount = 0;
    cartItems.map(item => {
      price += item.price.mrp;
      discount += (item.price.mrp - item.price.cost)
    });
    setPrice(price);
    setDiscount(discount)
  }

  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>

      <Container>
          <Typography>Price ({ cartItems?.length } item)
            <Price component="span">₹{price}</Price>
          </Typography>
          <Typography>Discount
            <Right component="span">-₹{discount}</Right>
          </Typography>
          <Typography>Delivery Charges
            <Right component="span">₹40</Right>
          </Typography>
          <Typography variant='h6'>Total Amount
            <Price component="span">₹{price - discount + 40 }</Price>
          </Typography>
          <Discount>You will save ₹{discount - 40} on this order </Discount>
      </Container>
      <LastComponent>
        <LastHeading> <VerifiedUserIcon /> Safe and Secure Payments.Easy returns.100% Authentic products.</LastHeading>
      </LastComponent>
    </Box>
  )
}

export default TotalBalance