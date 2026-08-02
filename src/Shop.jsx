import styled from "styled-components";
import { useOutletContext } from "react-router";
import { ListShop } from "./ListShop";

const ShopContainer = styled.section``;

const Shop = () => {
  const [listItem] = useOutletContext();

  return (
    <ShopContainer>
      <ListShop listItem={listItem}></ListShop>
    </ShopContainer>
  );
};

export default Shop;
