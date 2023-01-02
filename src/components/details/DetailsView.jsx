import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Box, Grid,  styled } from "@mui/material"
import { useParams } from "react-router-dom"
import { getProductDetails } from '../../redux/actions/productActions'
import ActionItem from './ActionItem'
import ProductDetails from './ProductDetails'

const Component = styled(Box)`
    background: #f2f2f2;
    margin-Top: 55px;
`;

const Container = styled(Grid)(({ theme}) => ({

  background: '#FFFFFF',
  display: 'flex',   
  [theme.breakpoints.down('md')]: {
    margin: 0
  }

}));


const RightContainer = styled(Grid)`
    padding: 20px;
    margin-top: 50px
`

const DetailsView = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  const { loading, product } =  useSelector(state => state.getProductDetails)

  useEffect(() => {
      if(product && id !== product.id){
        dispatch(getProductDetails(id))
      }
  }, [dispatch,  product, id, loading])

  return (
    <Component>
      {
         product && Object.keys(product).length && 
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product} />
            </Grid>

            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                <ProductDetails  product={product} />
            </RightContainer>
          </Container>
      }
    </Component>
  )
}

export default DetailsView