import styled from "styled-components";
import { Link } from "react-router";

const ItemContainer = styled.li`
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

export function ListShop(props) {
  return (
    <ul>
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
    </ul>
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

export default Item;
