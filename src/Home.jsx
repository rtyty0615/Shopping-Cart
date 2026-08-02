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
    all: unset;
    cursor: pointer;
    background-color: #5f2e00;
    color: white;
    margin: 0 1em;
    padding: 0.6em 3rem;
    font-size: 1.5rem;
    border-radius: 8px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Warm Up Your Style with Cold-Weather Savings</h1>
      <Link to="shop">SHOP NOW</Link>
    </HomeContainer>
  );
}

export default Home;
