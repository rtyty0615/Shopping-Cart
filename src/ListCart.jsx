import styled from "styled-components";
import { Link, useOutletContext } from "react-router";
import { useState } from "react";
import AddCartController from "./ AddCartController";

const CartItemContainer = styled.li`
  margin: 2rem auto;
  padding: 2rem 8rem;
  display: flex;
  flex-direction: row;
  gap: 50px;
  font-size: 1.5rem;
  h2 {
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
  img {
    width: 200px;
    height: auto;
    display: block;
    flex-shrink: 0;
  }
`;

const RightSection = styled.div`
  width: 600px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > button {
    all: unset;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
  margin-bottom: 1rem;
  h3 {
    width: 120px;
    flex-shrink: 0;
    display: block;
    color: #5f2e00;
  }
`;

const CartTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > h2 {
    font-size: 2.8rem;
    margin: 2rem 0;
    align-self: flex-end;
    span {
      color: #5f2e00;
    }
  }
  > a {
    all: unset;
    cursor: pointer;
    background-color: #5f2e00;
    color: white;
    margin: 2rem 0;
    padding: 0.7em 3rem;
    font-size: 1.5rem;
    border-radius: 8px;
    align-self: flex-end;
    &:hover {
      opacity: 0.8;
    }
  }
  hr {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
`;

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 2rem;
    margin: 2rem 0;
  }
  a {
    all: unset;
    cursor: pointer;
    background-color: #5f2e00;
    color: white;
    padding: 0.7em 3rem;
    font-size: 1.5rem;
    border-radius: 8px;
    &:hover {
      opacity: 0.8;
    }
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
      {subtotal !== 0 ? (
        <CartTotalContainer>
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
          <h2>
            Subtotal: <span>${subtotal.toFixed(2)}</span>
          </h2>
          <hr></hr>
          <a href="https://youtu.be/NuyqYp4vv4Q?si=ZTtgckdWl0JTeGbP">
            PROCEED TO CHECKOUT
          </a>
        </CartTotalContainer>
      ) : (
        <EmptyCartContainer>
          <h2>There are currently no items in your cart.</h2>
          <Link to={`/shop`}>Continue Shopping</Link>
        </EmptyCartContainer>
      )}
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
      </Link>
      <RightSection>
        <TitleContainer>
          <Link to={`/shop/${name}`}>
            <h2>{title}</h2>
          </Link>
          <h3>$ {price}</h3>
        </TitleContainer>
        <AddCartController>
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
        </AddCartController>
        <button onClick={handleRemoveClick}>Remove Item</button>
      </RightSection>
    </CartItemContainer>
  );
};

export default ListCart;
