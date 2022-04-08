import React from 'react'
import styled from 'styled-components'
import StyledBadge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const  Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding: 0px 10px;
`
const Left = styled.div` 
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div` 
    flex: 1;
    text-align: center;
`
const Right = styled.div` 
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    &:focus {
        outline: none;
    }
`

const Logo = styled.h1`
    font-weight: bold;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    padding: 0px 10px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{color: "gray", fontSize: 16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>ESTRANGHERO</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem aria-label="cart">
                        <StyledBadge badgeContent={1} color="secondary">
                            <ShoppingCartOutlinedIcon />
                        </StyledBadge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar