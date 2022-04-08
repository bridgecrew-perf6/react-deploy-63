import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    color: white;
    background: #${props=>props.color};
    border: 2px solid #${props=>props.color};
    &:hover {
        color: #${props=>props.color};
        background: white;
    }
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    height: 100px;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ESTRANGHERO</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga, tempora error repudiandae quam iusto natus aut at fugit, aperiam dolorem cumque doloribus ipsa. Vel unde sed praesentium minima id?</Desc>
            <SocialContainer>
                <SocialIcon color="3b5998">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E1306C">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="1da1f2">
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Categories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title></Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}} /> #123 Shop address, City
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}} /> Globe: 
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}} /> Smart: 
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@email.com
            </ContactItem>
            <Payment src="https://carusjewellery.com/wp-content/uploads/2019/12/Payment-options-from-Carus-Jewellery-.png" />
        </Right>
    </Container>
  )
}

export default Footer