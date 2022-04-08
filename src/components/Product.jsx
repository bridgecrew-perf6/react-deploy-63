import styled from 'styled-components'
import HeartIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s ease-out;
`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5fbfd;
    position: relative;
    cursor: pointer;
    &:hover ${Info} {
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: white;
    position: absolute;
`
const Image = styled.img`
    height: 55%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    transition: 0.25s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
        transition: 0.25s ease;
    }
`
const Title = styled.p``
const Price = styled.p``

const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon><ShoppingCartIcon/></Icon>
            <Icon><SearchIcon/></Icon>
            <Icon><HeartIcon/></Icon>
            <Title></Title>
            <Price></Price>
        </Info>
    </Container>
  )
}

export default Product