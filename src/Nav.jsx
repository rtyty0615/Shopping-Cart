import styled from "styled-components";
import { Link } from "react-router";
import Container from "./Container";
import cartIcon from "./image/grocery-store.png";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background: #a15814;
  width: 100%;

  img {
    width: 50px;
    height: 50px;
    filter: invert(1);
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;

  &:hover {
    opacity: 0.8;
  }
`;

const HomeLink = styled(NavLink)`
  font-size: 3rem;
  color: #ffffff;
`;

const StyledCartLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
`;

const CartBadge = styled.h3`
  position: absolute;
  bottom: -6px;
  right: 15px;

  background-color: #008000;
  color: #ffffff;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;

export function Navigation({ listItem }) {
  const activeCartItems = listItem.filter((item) => item.cartSum > 0);

  const totalItem = activeCartItems.reduce(
    (sum, item) => sum + item.cartSum,
    0,
  );

  return (
    <Nav>
      <HomeLink to="/">WINTER SALES</HomeLink>
      <Container>
        <NavLink to="shop">Shop</NavLink>
        <StyledCartLink to="cart">
          <img src={cartIcon} alt="Cart"></img>
          {totalItem !== 0 && <CartBadge>{totalItem}</CartBadge>}
        </StyledCartLink>
      </Container>
    </Nav>
  );
}
