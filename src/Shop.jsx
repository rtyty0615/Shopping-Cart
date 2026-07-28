import styled from "styled-components";
import { useOutletContext } from "react-router";
import { ListShop } from "./Item";

const ShopContainer = styled.div`
  margin: 2rem auto;
  padding: 2rem;

  h1 {
    font-size: 1.8rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
`;

const Shop = () => {
  const listItem = useOutletContext();

  return (
    <ShopContainer>
      <h1>Hello from shop page!</h1>
      <p>So, how are you?</p>
      <ListShop listItem={listItem}></ListShop>
    </ShopContainer>
  );
};

export default Shop;
