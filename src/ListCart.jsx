import styled from "styled-components";
import { Link } from "react-router";

const CartItemContainer = styled.li`
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

export function ListCart(props) {
  return (
    <>
      <ul>
        {props.listItem
          .filter((item) => item.cartSum > 0)
          .map((cartItem) => {
            return (
              <CartItem
                key={cartItem.name}
                name={cartItem.name}
                title={cartItem.title}
                price={cartItem.price}
                description={cartItem.description}
                imgSrc={cartItem.imgSrc}
              />
            );
          })}
      </ul>
      <button>PROCEED TO CHECKOUT</button>
    </>
  );
}

const CartItem = ({ name, title, price, imgSrc }) => {
  return (
    <CartItemContainer>
      <Link to={`/shop/${name}`}>
        <img src={imgSrc} alt={title}></img>
        <h2>{title}</h2>
      </Link>
      <h3>$ {price}</h3>
      {/* <div>
        <button onClick={handleMinusClick}>-</button>
        <label htmlFor={itemPath.name}></label>
        <input
          type="number"
          id={itemPath.name}
          name={itemPath.name}
          value={cartNum}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleAddClick}>+</button>
      </div> */}
    </CartItemContainer>
  );
};

export default ListCart;
