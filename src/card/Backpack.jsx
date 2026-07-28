import { Link, useOutletContext } from "react-router";

const Backpack = () => {
  const listItem = useOutletContext();
  const backpackItem = listItem[0];
  return (
    <>
      <img src={backpackItem.imgSrc} alt={backpackItem.title}></img>
      <h2>{backpackItem.title}</h2>
      <h3>$ {backpackItem.price}</h3>
      <p>{backpackItem.description}</p>
      <button>Add to cart</button>
      <Link to="/shop">Go back</Link>
    </>
  );
};

export default Backpack;
