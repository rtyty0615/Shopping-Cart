import styled from "styled-components";
import { Link, useOutletContext } from "react-router";

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
  return (
    <>
      <ul>
        {listItem
          .filter((item) => item.cartSum > 0)
          .map((cartItem) => {
            return (
              <CartItem
                key={cartItem.name}
                name={cartItem.name}
                title={cartItem.title}
                price={cartItem.price}
                imgSrc={cartItem.imgSrc}
                setListItem={setListItem}
                cartSum={cartItem.cartSum}
              />
            );
          })}
      </ul>
      <button>PROCEED TO CHECKOUT</button>
    </>
  );
}

const CartItem = ({ name, title, price, imgSrc, setListItem, cartSum }) => {
  function handleAddClick() {
    console.log(name);
    setListItem((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          let prevCartSum = item.cartSum;
          return { ...item, cartSum: prevCartSum + 1 };
        }
        return item;
      }),
    );
  }

  function handleMinusClick() {
    console.log(name);
    setListItem((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          let prevCartSum = item.cartSum;
          return { ...item, cartSum: prevCartSum - 1 };
        }
        return item;
      }),
    );
  }

  function handleInputChange(e) {
    const numericValue = e.target.valueAsNumber;

    if (Number.isNaN(numericValue)) {
      setListItem((prev) =>
        prev.map((item) =>
          item.name === name ? { ...item, cartSum: 1 } : item,
        ),
      );
      return;
    }

    setListItem((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, cartSum: numericValue } : item,
      ),
    );
  }

  function handleRemoveClick() {
    console.log(name);
    setListItem((prev) =>
      prev.map((item) => {
        if (item.name === name) {
          return { ...item, cartSum: 0 };
        }
        return item;
      }),
    );
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
          value={cartSum}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleAddClick}>+</button>
      </div>
      <button onClick={handleRemoveClick}>Remove Item</button>
    </CartItemContainer>
  );
};

export default ListCart;
