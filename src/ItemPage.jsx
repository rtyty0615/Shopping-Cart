import { Link, useParams, useOutletContext } from "react-router";
import Shop from "./Shop";

const ItemPage = () => {
  const { itemName } = useParams();
  const listItem = useOutletContext();
  const itemPath = listItem.find((item) => item.name === itemName);
  console.log(itemPath);

  return <>{itemName ? <ItemInfo itemPath={itemPath} /> : <Shop />}</>;
};
const ItemInfo = ({ itemPath }) => {
  return (
    <>
      <img src={itemPath.imgSrc} alt={itemPath.title}></img>
      <h2>{itemPath.title}</h2>
      <h3>$ {itemPath.price}</h3>
      <p>{itemPath.description}</p>
      <button>Add to cart</button>
      <Link to="/shop">Go back</Link>
    </>
  );
};

export default ItemPage;
