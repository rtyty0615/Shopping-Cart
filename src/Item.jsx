import styled from "styled-components";

const ItemContainer = styled.div`
  margin: 2rem auto;
  padding: 2rem;

  h2 {
    font-size: 1.6rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
`;

const Item = () => {
  return (
    <ItemContainer>
      <img></img>
      <h2>Item</h2>
      <p>$129.99</p>
    </ItemContainer>
  );
};

export default Item;
