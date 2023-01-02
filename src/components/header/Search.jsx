import React, { useState, useEffect } from 'react'
import { InputBase, Box, styled, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../../redux/actions/productActions';
import { Link } from "react-router-dom"


const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;

`;

const InputSearch = styled(InputBase)`
   padding-left: 20px;
    width: 100%;
    font-size: unset;
    & .css-1p1q6vx-MuiInputBase-root' {
        color: black;
    }
`;



    
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px
`

const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 36px
`

const Search = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState()

    const { products } = useSelector(state => state.getProducts)

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    const getText = (text) => {
        setText(text)
    }

  return (
        <SearchContainer>
                <InputSearch  placeholder='Search for products, brands and more' 
                    onChange={(e) => getText(e.target.value)}
                    value={text}
                />  
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                {
                    text && 
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link to={`/product/${product.id}`}
                                        onClick={() => setText('')}
                                    >

                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
                }
        </SearchContainer>
  )
}

export default Search