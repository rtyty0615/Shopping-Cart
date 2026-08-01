import styled from "styled-components";
import { useOutletContext } from "react-router";
import ListCart from "./ListCart";

const CartContainer = styled.div`
  margin: 2rem auto;
  padding: 2rem;

  h1 {
    font-size: 1.8rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }
`;

const Cart = () => {
  const [listItem] = useOutletContext();

  return (
    <>
      <CartContainer>
        <h1>YOUR CART</h1>
        <hr></hr>
        <ListCart listItem={listItem}></ListCart>
      </CartContainer>
    </>
  );
};

export default Cart;
