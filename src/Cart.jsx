import styled from "styled-components";
import ListCart from "./ListCart";

const CartContainer = styled.section`
  margin: 2rem auto;
  padding: 5rem 30rem;

  h1 {
    font-size: 2.8rem;
    color: #1a1a1a;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const Cart = () => {
  return (
    <>
      <CartContainer>
        <h1>YOUR CART</h1>
        <hr></hr>
        <ListCart></ListCart>
      </CartContainer>
    </>
  );
};

export default Cart;
