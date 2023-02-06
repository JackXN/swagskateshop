import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";






// 12 products
// 1. 3 Hats
// 2. 3 Shirts
// 3. 3 Shoes
// 4. 3 pants


    

const Container = styled.div`
padding: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`


const BASE_URL = 'http://localhost:2000/api';
const Products = ({cat,filters,sort}) => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(filteredProducts)
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `${BASE_URL}/products?category=${cat}`
            : `${BASE_URL}/products`
        );
        setProducts(res.data);
        console.log(products)
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

console.log(filteredProducts)

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id}/>)}
    </Container>
  );
};

export default Products;
