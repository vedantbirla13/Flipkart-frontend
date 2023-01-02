import { styled, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from "react-redux"
import Banner from './Banner'
import Navbar from './Navbar'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from '../MidSection'

const Component = styled(Box)`
    padding: 20px 10px
    background: #F2F2F2
    
`


const Home = () => {
  
  const { products} = useSelector(state => state.getProducts)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  

  return (
    <>
        <Navbar />
        <Component>
            <Banner />
            <MidSlide  products={products} title="Deal of the day" timer={true} />
            <MidSection />
            <Slide  products={products} title="Discouts for you" timer={false} />
            <Slide  products={products} title="Suggested Items" timer={false} />
            <Slide  products={products} title="Top Selections" timer={false} />
            <Slide  products={products} title="Trending offers" timer={false} />
            <Slide  products={products} title="Season's top picks" timer={false} />
            <Slide  products={products} title="Recommeded Items" timer={false} />
        </Component>
    </>
  )
}

export default Home