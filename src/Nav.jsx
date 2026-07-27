import styled from "styled-components";
import { Link } from "react-router";
import Container from "./Container";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  background: #a15814;
  width: 100%;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 2rem;
    margin: 0 1em;
    padding: 0.25em 1em;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const HomeLink = styled(Link)`
  font-weight: bold;
`;

export function Navigation() {
  return (
    <Nav>
      <HomeLink to="/">Home</HomeLink>
      <Container>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </Container>
    </Nav>
  );
}
