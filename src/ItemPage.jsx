import { Link, useParams, useOutletContext } from "react-router";
import Shop from "./Shop";
import { useState } from "react";
import styled from "styled-components";
import AddCartController from "./ AddCartController";

const ItemPage = () => {
  const { itemName } = useParams();
  const [listItem, setListItem] = useOutletContext();
  const itemPath = listItem.find((item) => item.name === itemName);

  return (
    <>
      {itemName ? (
        <ItemInfo
          itemPath={itemPath}
          listItem={listItem}
          setListItem={setListItem}
        />
      ) : (
        <Shop />
      )}
    </>
  );
};

const ItemInfoContainer = styled.div`
  margin: 2rem auto;
  padding: 5rem 30rem;
  color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.5rem;
    color: #5f2e00;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
  }
  hr {
    margin: 1rem 0;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 1.5rem;
  a {
    text-decoration: none;
    color: #5f2e00;
    margin: auto;
    font-weight: bold;

    &:hover {
      opacity: 0.8;
    }
  }
  > button {
    all: unset;
    cursor: pointer;
    background-color: #5f2e00;
    color: white;
    margin: auto;
    padding: 18px 30px;
    border-radius: 8px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const ItemInfo = ({ itemPath, setListItem }) => {
  const [inputValue, setInputValue] = useState(1);
  const [cartNum, setCartNum] = useState(1);

  function handleAddClick() {
    setInputValue(cartNum + 1);
    setCartNum(cartNum + 1);
  }

  function handleMinusClick() {
    if (cartNum > 0) {
      setInputValue(cartNum - 1);
      setCartNum(cartNum - 1);
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    let numericValue = parseInt(inputValue, 10);

    if (Number.isNaN(numericValue)) {
      numericValue = 1;
    }

    if (numericValue <= 0) {
      numericValue = 0;
    }

    setInputValue(numericValue);
    setCartNum(numericValue);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.target.blur();
    }
  }

  function handleCartClick() {
    setListItem((prev) =>
      prev.map((item) => {
        if (item.name === itemPath.name) {
          let prevCartSum = item.cartSum;
          return { ...item, cartSum: prevCartSum + cartNum };
        }
        return item;
      }),
    );
  }

  return (
    <ItemInfoContainer>
      <img src={itemPath.imgSrc} alt={itemPath.title}></img>
      <RightSection>
        <h2>{itemPath.title}</h2>
        <h3>$ {itemPath.price}</h3>
        <p>{itemPath.description}</p>
        <hr></hr>
        <AddCartController>
          <button onClick={handleMinusClick}>-</button>
          <label htmlFor={itemPath.name}></label>
          <input
            type="number"
            id={itemPath.name}
            name={itemPath.name}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          ></input>
          <button onClick={handleAddClick}>+</button>
        </AddCartController>
        <button onClick={handleCartClick}>ADD TO CART</button>
        <Link to="/shop">GO BACK</Link>
      </RightSection>
    </ItemInfoContainer>
  );
};

export default ItemPage;
