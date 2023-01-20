import {
  MdOutlineFavorite as Favorite,
  MdSearch as Search,
  MdShoppingCart as ShoppingCart,
} from "react-icons/md";

//ss
import { Link } from "next/link";
import {
  Box,
  Center,
  useColorModeValue,
  Heading, 
  Text,
  Stack,
  Image,
  Button,
  StatUpArrow
} from '@chakra-ui/react';

const Product = ({ item }) => {
  


  return (
<Box sx={styles.Container}>
  <Box sx={styles.Circle}></Box>
  <Image src={item.img} alt={item.title} height='100px' width='100px'/>
  <Box sx={styles.Info}>

  </Box>
<Box sx={styles.textContainer}>
  <Text as='h1'>{item.title}</Text>
  <Button>Shop Now</Button>
</Box>
</Box>
  );
};


const styles = {
  Container: {
  flex: 1,
  margin: '5px',
minWidth: '280px',
height: '350px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#f5fbfd',
position: 'relative',
background: 'white',
  },
Circle: {
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  backgroundColor: 'white',
  position: 'absolute'
},
Info: {
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,0.2)',
  zIndex: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.5.s ease',
  cursor: 'pointer'

}
}

export default Product;
