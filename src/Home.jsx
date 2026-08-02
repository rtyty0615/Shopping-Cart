import styled from "styled-components";
import { Link } from "react-router";
import winterPhoto from "./image/winter.jpg";

const HomeContainer = styled.div`
  margin: 2rem auto;
  padding: 2rem;

  h1 {
    font-size: 1.8rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
  }

  a {
    color: #a15814;
    text-decoration: none;
    font-size: 2rem;
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
      <img src={winterPhoto} alt="A snowy plain and hills during winter"></img>
    </HomeContainer>
  );
}

export default Home;
