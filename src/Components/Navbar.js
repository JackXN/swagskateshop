import React from 'react';
// import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import {mobile} from '../helpers/responsive';
// import {useSelector} from 'redux';
import Link from 'next/link';


const Container = styled.div`
height: 60px;
${mobile({height: '50px'})}
`;

const Wrapper = styled.div`
padding: 15px 20px;
display: flex;
align-items: center;
justify-content:space-between;
background: black;
color: white;
border: none;
${mobile({padding: '10px 0px'})}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: 'none'})}
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;



const Navbar = () => {

    // const quantity = useSelector(state=>state.cart.quantity);
    // const user = useSelector(state => state.user)
    const user = null
    // console.log(user)

return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
            </Left>
            <Center>
                <Logo>
                    <Link href='/login' style={{color: 'white', textDecoration: 'none'}}>Swag</Link>
                </Logo>
                </Center>
                {user ? <Right>
                    <Link to="/cart">
          <MenuItem>
       
          </MenuItem>
          </Link>
                </Right> :
                    <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>
                    <Link href='/login' style={{color: 'white', textDecoration: 'none'}}>SIGN IN</Link>
                    </MenuItem>
                    <Link href="/cart">
                    <MenuItem>
                    </MenuItem>
                    </Link>
                  </Right>
                }
        </Wrapper>
    </Container>
)


}

export default Navbar;