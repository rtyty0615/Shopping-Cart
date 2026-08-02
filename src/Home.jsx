import styled from "styled-components";
import { Link } from "react-router";
import heroImg from "./image/winter.jpg";

const HomeContainer = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
  gap: 20px;
  color: #000cb6;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: #5f2e00;
    text-decoration: none;
    font-size: 2.4rem;
    font-weight: bold;
    margin: 0 1em;
    padding: 0.25em 1em;

    &:hover {
      opacity: 0.8;
    }
  }

  img {
  }
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Warm Up Your Style with Cold-Weather Savings</h1>
      <Link to="shop">Shop Now</Link>
    </HomeContainer>
  );
}

export default Home;
