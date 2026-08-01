import { Link, useParams, useOutletContext } from "react-router";
import Shop from "./Shop";
import { useState } from "react";

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
const ItemInfo = ({ itemPath, listItem, setListItem }) => {
  const [cartNum, setCartNum] = useState(1);

  function handleAddClick() {
    setCartNum(cartNum + 1);
  }

  function handleMinusClick() {
    setCartNum(cartNum - 1);
  }

  function handleInputChange(e) {
    const val = e.target.value;
    if (val === "") {
      setCartNum(1);
      return;
    }
    setCartNum(parseInt(val, 10));
  }

  function handleCartClick() {
    console.log(itemPath.name);
    setListItem((prev) =>
      prev.map((item) => {
        if (item.name === itemPath.name) {
          let prevCartSum = item.cartSum;
          return { ...item, cartSum: prevCartSum + cartNum };
        }
        return item;
      }),
    );
    console.log(listItem[0].cartSum);
    console.log(listItem);
  }

  return (
    <>
      <img src={itemPath.imgSrc} alt={itemPath.title}></img>
      <h2>{itemPath.title}</h2>
      <h3>$ {itemPath.price}</h3>
      <p>{itemPath.description}</p>
      <div>
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
      </div>
      <button onClick={handleCartClick}>Add to cart</button>
      <Link to="/shop">Go back</Link>
    </>
  );
};

export default ItemPage;
