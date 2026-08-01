import styled from "styled-components";
import { Link, useOutletContext } from "react-router";
import { useState } from "react";

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

export function ListCart() {
  const [listItem, setListItem] = useOutletContext();

  const activeCartItems = listItem.filter((item) => item.cartSum > 0);

  const subtotal = activeCartItems.reduce(
    (sum, item) => sum + item.price * item.cartSum,
    0,
  );

  return (
    <>
      <ul>
        {activeCartItems.map((cartItem) => (
          <CartItem
            key={cartItem.name}
            name={cartItem.name}
            title={cartItem.title}
            price={cartItem.price}
            imgSrc={cartItem.imgSrc}
            setListItem={setListItem}
            cartSum={cartItem.cartSum}
          />
        ))}
      </ul>
      <hr></hr>
      <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
      <hr></hr>
      <a href="https://youtu.be/NuyqYp4vv4Q?si=ZTtgckdWl0JTeGbP">
        PROCEED TO CHECKOUT
      </a>
    </>
  );
}

const CartItem = ({ name, title, price, imgSrc, setListItem, cartSum }) => {
  const [inputValue, setInputValue] = useState(cartSum);
  const [prevCartSum, setPrevCartSum] = useState(cartSum);

  if (cartSum !== prevCartSum) {
    setPrevCartSum(cartSum);
    setInputValue(cartSum);
  }

  function handleAddClick() {
    setListItem((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, cartSum: item.cartSum + 1 } : item,
      ),
    );
  }

  function handleMinusClick() {
    setListItem((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, cartSum: item.cartSum - 1 } : item,
      ),
    );
  }

  function handleRemoveClick() {
    setListItem((prev) =>
      prev.map((item) => (item.name === name ? { ...item, cartSum: 0 } : item)),
    );
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    let numericValue = parseInt(inputValue, 10);

    if (Number.isNaN(numericValue)) {
      numericValue = 1;
      setInputValue(1);
    }

    if (numericValue <= 0) {
      numericValue = 0;
    }

    setListItem((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, cartSum: numericValue } : item,
      ),
    );
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.target.blur();
    }
  }

  return (
    <CartItemContainer>
      <Link to={`/shop/${name}`}>
        <img src={imgSrc} alt={title}></img>
        <h2>{title}</h2>
      </Link>
      <h3>$ {price}</h3>
      <div>
        <button onClick={handleMinusClick}>-</button>
        <label htmlFor={name}></label>
        <input
          type="number"
          id={name}
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        ></input>
        <button onClick={handleAddClick}>+</button>
      </div>
      <button onClick={handleRemoveClick}>Remove Item</button>
    </CartItemContainer>
  );
};

export default ListCart;
