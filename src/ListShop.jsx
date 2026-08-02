import styled from "styled-components";
import { Link } from "react-router";

const ShopItemContainer = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
  place-items: center;
  list-style-type: none;
  gap: 50px;
  padding: 50px;
  width: 100%;
`;

const ItemContainer = styled.li`
  margin: 2rem auto;
  padding: 2rem;
  width: 100%;
  height: 100%;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: 100%;
    height: 100%;
    padding: 10px 30px;
  }

  h2 {
    font-size: 1.8rem;
    color: #1a1a1a;
    margin: 0.5rem 0;
  }

  h3 {
    font-size: 2.5rem;
    color: #5f2e00;
  }
`;

export function ListShop(props) {
  return (
    <ShopItemContainer>
      {props.listItem.map((shopItem) => {
        return (
          <Item
            key={shopItem.name}
            name={shopItem.name}
            title={shopItem.title}
            price={shopItem.price}
            description={shopItem.description}
            imgSrc={shopItem.imgSrc}
          />
        );
      })}
    </ShopItemContainer>
  );
}

const Item = ({ name, title, price, imgSrc }) => {
  return (
    <ItemContainer>
      <Link to={`/shop/${name}`}>
        <img src={imgSrc} alt={title}></img>
        <h2>{title}</h2>
        <h3>$ {price}</h3>
      </Link>
    </ItemContainer>
  );
};

export default ListShop;
