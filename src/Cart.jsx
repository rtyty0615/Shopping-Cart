import styled from "styled-components";

const CartContainer = styled.div`
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

const Cart = () => {
  return (
    <CartContainer>
      <h1>Hello from cart page!</h1>
      <p>So, how are you?</p>
    </CartContainer>
  );
};

export default Cart;
