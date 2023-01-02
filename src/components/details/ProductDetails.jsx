import React from 'react'
import { Typography, Box, styled, Table, TableBody, TableCell, TableRow } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;

    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00cc00;
    font-size: 15px;

`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px; 
        margin-top: 10px;
        border: none;
        border-bottom: none !important
    }
`


const ProductDetails = ({ product }) => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)

  return (

    <>
        <Typography>{product.title.longTitle}</Typography>
                <Typography style={{ marginTop: 5, color: '#878787'}}>8 Ratings & 1 Reviews
                <Box component="span"> <img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} /> </Box>
                </Typography>
                <Typography>
                  <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                  <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                  <Box component="span" style={{ color: "#388E3C" }} >{product.price.discount} Off</Box>
                </Typography>
        <Typography>Available offers</Typography>
        <SmallText>
            <Typography> <StyledBadge /> Get extra 6% off (price inclusive of cashback/coupon)T&C</Typography>
            <Typography> <StyledBadge /> Buy this product and get upto ₹250 off on Flipkart Furniture</Typography>
            <Typography> <StyledBadge /> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</Typography>
            <Typography> <StyledBadge /> 10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,250 on orders of ₹5,000 and aboveT&C</Typography>
            <Typography> <StyledBadge /> 10% instant discount on SBI Mastercard Debit Cards, up to ₹750, on orders of ₹2,500 and aboveT&C</Typography>
            <Typography> <StyledBadge /> 10% off on Kotak Bank Credit Cards and Credit EMI Trxns, up to ₹1,250. On orders of ₹5,000 and aboveT&C</Typography>
        </SmallText>
        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{ color: "#878787" }} >Delivery</TableCell>
                    <TableCell style={{ fontWeight: "bold" }} >Delivery by {date.toDateString()} | ₹40 </TableCell>
                </ColumnText>
            </TableBody>

            <TableBody>
                <ColumnText>
                    <TableCell style={{ color: "#878787" }} >Warranty</TableCell>
                    <TableCell >No Warranty </TableCell>
                </ColumnText>
            </TableBody>

            <TableBody>
                <ColumnText>
                    <TableCell style={{ color: "#878787" }} >Seller</TableCell>
                    <TableCell style={{ color: "#2874f0" }} >
                        <Box component="span" style={{ color:"#2874f0" }} >SuperComet</Box>
                        <Typography>GST invoice available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>

                <TableCell colSpan={2}>
                    <img src={adURL} style={{ width: 300 }}  alt="" />
                </TableCell>

                <ColumnText>
                    <TableCell style={{ color: "#878787" }} >Description</TableCell>
                    <TableCell >{product.description}</TableCell>
                </ColumnText>

            </TableBody>

        </Table>
    </>
  )
}

export default ProductDetails